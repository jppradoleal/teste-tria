import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import Comic from '../../core/models/comic.model';
import { ComicsService } from '../../core/services/comics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comics: Comic[];
  @Input() version = '';

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    this.comicsService.getComics().subscribe(data => {
      this.comics = data;
    });
  }
}
