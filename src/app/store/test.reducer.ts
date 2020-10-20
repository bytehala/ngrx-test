import { state } from '@angular/animations';
import {createAction, createReducer, on, props} from '@ngrx/store'
import { BookModel } from './book-model';

export const update = createAction('[One Component] Update', props<{book: BookModel}>());

export const initialState = [];

const bookReducer = createReducer(
    initialState,
    on(update, (state, {book}) => ([...state, book]))
)

export function _bookReducer(state, action) {
    return bookReducer(state, action);
}