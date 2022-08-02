import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResourcesModule } from '../shared/resources/resources.module';
import { TemplateModule } from '../shared/template/template.module';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ProjectStackComponent } from './components/project-stack/project-stack.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent,
    TechStackComponent,
    ProjectStackComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ResourcesModule,
    TemplateModule,
    FormsModule
  ]
})
export class PrincipalModule { }
