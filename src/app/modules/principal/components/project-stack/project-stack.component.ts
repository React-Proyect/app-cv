import { Component, OnInit } from '@angular/core';
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
    this.projectStackList = [
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
      {
        name: 'Mundo Terrenos cl',
        image: '/assets/images/resources/projects/mundoterrenos.png',
        alt: 'image Mundo Terrenos cl',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea officiis tenetur sunt
        obcaecati rerum quidem iusto sapiente perspiciatis amet asperiores minus dolores labore illo
        sed? Voluptas ipsam molestiae nulla?`,
        tech: ['HTML', 'JavaScript'],
        nameSite: 'MundoTerrenos.Cl',
        site: 'https:waresoft.com.sv'
      },
    ];
  }

}
