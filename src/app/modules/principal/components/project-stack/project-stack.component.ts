import { Component, OnInit } from '@angular/core';
import { projectStackList } from 'src/app/modules/shared/data/projectStackList';
import { ProjectStack } from '../../domain/project-stack';

@Component({
    selector: 'app-project-stack',
    templateUrl: './project-stack.component.html',
    styleUrls: ['./project-stack.component.scss']
})
export class ProjectStackComponent implements OnInit {

    projectStackList: ProjectStack[] = [];

    constructor() { }

    ngOnInit(): void {
        this._init();
    }

    _init(): void {
        this.projectStackList = projectStackList;
    }
}
