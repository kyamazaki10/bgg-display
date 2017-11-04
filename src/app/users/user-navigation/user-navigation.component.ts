import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: [ './user-navigation.component.css' ]
})
export class UserNavigationComponent implements OnInit {
  private active: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    const path = this.location.path().split('/')[3];

    this.active = {
      [path]: true
    };
  }

  navigate() { }
}