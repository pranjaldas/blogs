import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  blogForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private blogApiService: BlogsApiService,
     private router: Router) { }

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: [''],
      author: [''],
      content: ['']
    });
  }
  create(){
    const blog: Blog = this.blogForm.value;
    blog.date = new Date;
    this.blogApiService.createBlog(blog);
    console.table(blog);
    this.router.navigate(['/home']);
  }

}
