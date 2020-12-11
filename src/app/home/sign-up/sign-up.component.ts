import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {

  signUpForm = this.formBuilder.group({
    name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
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
  })

  @ViewChild('nameInput')
  nameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.nameInput?.nativeElement.focus();
  }

}
