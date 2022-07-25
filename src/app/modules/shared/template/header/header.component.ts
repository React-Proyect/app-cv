import { Component, HostListener, OnInit } from '@angular/core';
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
        active: window.location.pathname === '/' ? true : false
      },
      {
        name: 'About',
        path: 'about',
        active: window.location.pathname === '/about' ? true : false
      },
      {
        name: 'Tech Stack',
        path: 'technologies',
        active: window.location.pathname === '/technologies' ? true : false
      },
      {
        name: 'Projects',
        path: 'projects',
        active: window.location.pathname === '/projects' ? true : false
      },
      {
        name: 'Contact',
        path: 'contact',
        active: window.location.pathname === '/contact' ? true : false
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

  /* @HostListener('window:scroll', []) onWindowScroll() {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  } */
}
