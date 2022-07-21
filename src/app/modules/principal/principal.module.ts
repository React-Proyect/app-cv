import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuModule } from '../menu/menu.module';
import { MainComponent } from './pages/components/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MenuModule
  ]
})
export class PrincipalModule { }
