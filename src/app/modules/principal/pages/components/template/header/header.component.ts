import { Component, OnInit } from '@angular/core';
import { HeaderNav } from '../domain/header-nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuNav: HeaderNav[] = [];

  constructor() { }

  ngOnInit(): void {
    this._init();
  }

  _init(): void {
    this.menuNav = [
      {
        name: 'Home',
        path: '/',
        active: false
      },
      {
        name: 'About',
        path: 'about',
        active: false
      },
      {
        name: 'Tech Stack',
        path: 'technologies',
        active: false
      },
      {
        name: 'Projects',
        path: 'projects',
        active: false
      },
      {
        name: 'Contact',
        path: 'contact',
        active: false
      },
      {
        child:
          [
            {
              alt: 'icon-github',
              img: 'github',
              path: '#',
            },
            {
              alt: 'icon-twitter',
              img: 'twitter',
              path: '#',
            },
            {
              alt: 'icon-LinkedIn',
              img: 'linkedin',
              path: '#',
            }
          ]
      }
    ];
  }

  activeMenu(menu: string) {
    this.menuNav.forEach((menuElement) => menuElement.name === menu ? menuElement.active = true : menuElement.active = false);
  }

}
