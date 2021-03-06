import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInService } from './sign-in.service';
import { SignInForm } from './SignInForm';
import { SignInResponse } from './SignInResponse';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.formBuilder.group({
    email: ['', [
        Validators.required,
        Validators.email
      ]
    ],
    password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]
    ]
  });

  @ViewChild('emailInput')
  emailInput?: ElementRef<HTMLInputElement>;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private signInService: SignInService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.emailInput?.nativeElement.focus();
  }

  signIn(): void {
    const signInForm = this.signInForm.getRawValue() as SignInForm;
    this.signInService.signIn(signInForm)
      .subscribe((signIn: SignInResponse) => {
        console.log('sucessfull', signIn)
      }, (err) => {
        if (err.status === 401) {
          console.error(err)
        }
      });
  }
}
