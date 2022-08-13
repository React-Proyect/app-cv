import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { TippyDirective } from './directives/tippy.directive';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        TechnologiesComponent,
        ProjectsComponent,
        ContactComponent,
        TechStackComponent,
        ProjectStackComponent,
        TippyDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrincipalRoutingModule,
        ResourcesModule,
        TemplateModule,
    ]
})
export class PrincipalModule { }
