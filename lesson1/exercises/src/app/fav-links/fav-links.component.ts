import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title : string = 'Favorite Links'

  favLinks : string[] = ['https://twitch.tv/', 'https://arkamthebard.github.io/portfolio-site-new/', 'https://f1tv.formula1.com/'];

}
