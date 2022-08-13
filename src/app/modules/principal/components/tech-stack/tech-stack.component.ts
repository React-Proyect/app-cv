import { Component, OnInit } from '@angular/core';
import { TECH_STACK_LIST } from 'src/app/modules/shared/data/techStackList';
import { TechStack } from '../../domain/tect-stack';

@Component({
    selector: 'app-tech-stack',
    templateUrl: './tech-stack.component.html',
    styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

    techSatckList: TechStack[] = TECH_STACK_LIST;

    constructor() { }

    ngOnInit(): void {
    }


}
