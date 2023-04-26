import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;
  editMode: boolean = false;
  editBlog: Blog | undefined;
  constructor(private formBuilder: FormBuilder,
     private blogApiService: BlogsApiService,
     private router: Router,
     private route: ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null){
      this.editBlog = blogApiService.getById(Number(id));
      this.editMode = true;
    }
  
  }

  ngOnInit(): void {
    console.log(this.editBlog);
    if(this.editMode){
      this.blogForm = this.formBuilder.group({
        title: [this.editBlog?.title],
        author: [this.editBlog?.author],
        content: [this.editBlog?.content]
      });
    }else{
      this.blogForm = this.formBuilder.group({
        title: [''],
        author: [''],
        content: ['']
      });
    }
    
  }
  create(){
    if(this.editMode){
      this.update();
    }else{
      const blog: Blog = this.blogForm.value;
      blog.date = new Date;
      this.blogApiService.createBlog(blog);
    }
    this.router.navigate(['/home']);
    
  }
  update(){
    const blog: Blog = this.blogForm.value;
    blog.id = this.editBlog?.id;
    this.blogApiService.update(blog);
  }

}
