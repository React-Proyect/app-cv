import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [
        fadeInOnEnterAnimation(),
    ]
})
export class ContactComponent implements OnInit {

    formContact!: FormGroup;

    constructor(
        private _builder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.formContact = this._builder.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ ]+$')])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ ]+$')])],
            description: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ ]+$')])],
            email: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚ ]+$')])]
        });
    }


    sendContact(data: any): void {
        console.log("🚀 ~ file: contact.component.ts ~ line 31 ~ ContactComponent ~ sendContact ~ data", data)
    }
}
