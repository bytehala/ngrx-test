import { Component, OnInit } from '@angular/core';
import { BookModel } from '../store/book-model';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  book$: Observable<BookModel[]>

  constructor(private store: Store<{book: BookModel[]}>) {
    this.book$ = store.select('book');
  }

  ngOnInit(): void {
  }

  log() {
    this.store.forEach(book => {console.log(book)})
  }

}
