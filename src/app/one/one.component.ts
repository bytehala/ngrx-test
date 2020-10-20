import { Component, OnInit } from '@angular/core';
import { BookModel } from '../store/book-model';
import { Store } from '@ngrx/store';
import { update } from '../store/test.reducer'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  book$: Observable<BookModel[]>

  id = 0;
  bookAuthor = '';
  bookTitle = '';

  constructor(private store: Store<{book: BookModel[]}>) {
    this.book$ = store.select('book');
  }

  ngOnInit(): void {
  }

  update() {
    const book: BookModel = {id: this.id, author: this.bookAuthor, title: this.bookTitle}
    this.id++;
    this.bookAuthor = '';
    this.bookTitle = '';
    this.store.dispatch(update({book}))
  }

}
