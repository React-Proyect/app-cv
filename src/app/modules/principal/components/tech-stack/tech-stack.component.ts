import { Component, OnInit } from '@angular/core';
import { TectStack } from '../../domain/tect-stack';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  techSatckList: TectStack[] = [];

  constructor() { }

  ngOnInit(): void {
    this._init();
  }

  _init(): void {
    this.techSatckList = [
      {
        name: 'bootstrap',
        alt: 'my-tech-stack-bootstrap',
        href: '#'
      },
      {
        name: 'css',
        alt: 'my-tech-stack-css',
        href: '#'
      },
      {
        name: 'git',
        alt: 'my-tech-stack-git',
        href: '#'
      },
      {
        name: 'github',
        alt: 'my-tech-stack-github',
        href: '#'
      },
      {
        name: 'html',
        alt: 'my-tech-stack-html',
        href: '#'
      },
      {
        name: 'javascript',
        alt: 'my-tech-stack-javascript',
        href: '#'
      },
      {
        name: 'react',
        alt: 'my-tech-stack-react',
        href: '#'
      },
      {
        name: 'sass',
        alt: 'my-tech-stack-sass',
        href: '#'
      },
      {
        name: 'tailwind',
        alt: 'my-tech-stack-tailwind',
        href: '#'
      },
      {
        name: 'vscode',
        alt: 'my-tech-stack-vscode',
        href: '#'
      },
    ];
  }

}
