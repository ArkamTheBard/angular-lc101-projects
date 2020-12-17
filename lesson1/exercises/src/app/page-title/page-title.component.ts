import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title : string = 'Yardley\'s Angular Exercise for Lesson 1';

}
