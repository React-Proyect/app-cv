import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
    selector: '[appTippy]'
})
export class TippyDirective implements OnInit {

    @Input() label: string = '';

    constructor(
        private elementRef: ElementRef
    ) { }

    ngOnInit(): void {
        const element = this.elementRef.nativeElement;
        tippy(element, {
            content: this.label,
            theme: 'custom-tippy',
            animation: 'fade',
            placement: 'right',
        });
    }
}
