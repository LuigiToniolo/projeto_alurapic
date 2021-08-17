import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
              userName: ['', Validators.required],
              password: ['', Validators.required]
        });
    }
 }
