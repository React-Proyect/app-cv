import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-up-button',
    templateUrl: './up-button.component.html',
    styleUrls: ['./up-button.component.scss']
})
export class UpButtonComponent implements OnInit {

    @ViewChild('upButton') upButton: ElementRef | null = null;

    constructor() { }

    ngOnInit(): void {
    }

    @HostListener('window:scroll', []) onWindowScroll(): void {
        const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const upButton = this.upButton?.nativeElement;
        if (verticalOffset > 100) {
            upButton.style.bottom = '5vh';
        } else {
            upButton.style.bottom = '-10vh';
        }
    }

    swipUp(): void {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
}
