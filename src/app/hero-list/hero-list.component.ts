import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
title = 'Tour of Heroes';
hero = 'Windstorm';
  constructor() { }

  ngOnInit() {
  }

}
