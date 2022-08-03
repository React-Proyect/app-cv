import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderNavItem } from 'src/app/config/data/menu';
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
        this.menuNav = HeaderNavItem;
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
