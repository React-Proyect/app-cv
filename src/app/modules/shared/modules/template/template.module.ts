import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';
import { UpButtonComponent } from './components/up-button/up-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
    declarations: [
        HeaderComponent,
        MainComponent,
        UpButtonComponent,
        FooterComponent,
        AlertComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        MainComponent,
    ]
})
export class TemplateModule { }
