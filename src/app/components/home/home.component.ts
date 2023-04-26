import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogsApiService } from 'src/app/services/blogs-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogsList: Blog[] = []
  constructor(private blogsApiService: BlogsApiService) {
    this.blogsList = this.blogsApiService.getAllBlogs();
  }
  ngOnInit(): void {
   
  }


}
