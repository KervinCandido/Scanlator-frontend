import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { confirmPassword } from './confirm-password';
import { SignUpService } from './sign-up.service';
import { SignUp } from './SignUp';
import { SignUpAdapter } from './SignUpAdapter';

import { SignUpForm } from './SignUpForm';

@Component({
  selector: 'sc-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signUpForm = this.formBuilder.group({
    name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]
    ],
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
    ],
    confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]
    ]
  }, {
    validators: [confirmPassword]
  })

  @ViewChild('nameInput')
  nameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.nameInput?.nativeElement.focus();
  }

  signUp() {
    if (this.signUpForm.invalid || this.signUpForm.pending) return;

    const signUpForm = this.signUpForm.getRawValue() as SignUpForm;
    const signUp: SignUp = new SignUpAdapter(signUpForm);

    this.signUpService.signUp(signUp)
      .subscribe(() => console.log('sucessfull'), (err) => console.error(err))
  }
}
