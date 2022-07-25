import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
  ]
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
