import { Component, OnInit } from '@angular/core';

import { Book } from '../../view-model/Book';

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  ratings = ["", "Excellent", "Very Good", "Good", "Average", "Poor", "Bad", "Very Bad"];

  //book  = new Book(1, 'The Pragmatic Programmer: From Journeyman to Master', 'Andrew Hunt', this.ratings[2], 'https://www.amazon.com/gp/product/020161622X');
  book  = new Book(1, '', '', this.ratings[0], '');

  submitted = false;

  constructor() { }

  ngOnInit() {
    // nothing
  }

  onSubmit() { this.submitted = true; }

  addNewBook() {
    this.book  = new Book(1, 'The Pragmatic Programmer: From Journeyman to Master', 'Andrew Hunt', this.ratings[2], 'https://www.amazon.com/gp/product/020161622X');
  }

  // TODO: Remove this when we're done
  get diagnostic() { 
    return JSON.stringify(this.book); 
  }    

}
