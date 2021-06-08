import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Comic from '../models/comic.model';

@Injectable()
export class ComicsService {
  constructor(private http: HttpClient) {}

  getComics() {
    return this.http.get<Comic[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
