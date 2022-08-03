import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeaderNav } from '../domain/header-nav';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuNav: HeaderNav[] = [];

    @ViewChild('menuMobilModal') menuMobilModal: ElementRef | null = null;


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
                            path: 'https://github.com/UN1T7D',
                        },
                        {
                            alt: 'icon-twitter',
                            img: 'twitter',
                            path: 'https://twitter.com/UN1T7D',
                        },
                        {
                            alt: 'icon-LinkedIn',
                            img: 'linkedin',
                            path: 'https://www.linkedin.com/in/kevin-vasquez-46a0701b4/',
                        }
                    ]
            }
        ];
    }

    activeMenu(menu: string) {
        this.menuNav.forEach((menuElement) => menuElement.name === menu ? menuElement.active = true : menuElement.active = false);
        this.closeMenuModal();
    }

    openModal(): void {
        const modal = this.menuMobilModal?.nativeElement;
        modal.style.transition = "0.5s";
        modal.style.transform = "translate(0vw)";

    }
    closeMenuModal(): void {
        const modal = this.menuMobilModal?.nativeElement;
        modal.style.transition = "0.5s";
        modal.style.transform = "translate(-100vw)";
    }

}
