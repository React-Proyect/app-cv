import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { UpButtonComponent } from './up-button/up-button.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    UpButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    MainComponent
  ]
})
export class TemplateModule { }
