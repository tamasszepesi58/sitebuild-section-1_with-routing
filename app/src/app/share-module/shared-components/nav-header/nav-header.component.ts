import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  public currentPage = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
