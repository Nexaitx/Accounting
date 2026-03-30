import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {
 activeCategory: string = 'all';

  blogs = [
    {
      title: 'R&D Tax Credit Explained',
      category: 'tax',
      image: 'assets/image_2.jpg',
      readTime: '5 min read'
    },
    {
      title: 'Financial Planning Guide',
      category: 'cfo',
      image: 'assets/image_1.jpg',
      readTime: '4 min read'
    },
    {
      title: 'Bookkeeping Basics',
      category: 'bookkeeping',
      image: 'assets/image_1.jpg',
      readTime: '6 min read'
    }
  ];

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get filteredBlogs() {
    if (this.activeCategory === 'all') {
      return this.blogs;
    }
    return this.blogs.filter(blog => blog.category === this.activeCategory);
  }

}
