import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() blog: Blog | undefined;
  constructor() { }

  ngOnInit(): void {
    console.table(this.blog);
  }
  deleteBlog(){
    console.log("Delete "+this.blog?.id);
  }
  editBlog(){
    console.log("Edit "+this.blog?.id);
  }

}
