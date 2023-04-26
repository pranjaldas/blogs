import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsApiService {
  blogsList: Blog[] = [
    { id: 1, title: 'First Blog Post', author: 'John Doe', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: 2, title: 'Second Blog Post', author: 'Jane Smith', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: 3, title: 'Third Blog Post', author: 'Pranjal Das', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()},
    { id: 4, title: 'Fourth Blog Post', author: 'Pranjal Das', content: "A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.", date: new Date()}
  ];
  constructor() { }

  getAllBlogs(){
    return this.blogsList;
  }
  createBlog(blog: Blog){
    this.blogsList.push(blog);
  }
}
