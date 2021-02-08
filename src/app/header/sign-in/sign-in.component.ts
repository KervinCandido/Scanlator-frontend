import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm = this.formBuilder.group({

  });

  @ViewChild('emailInput')
  emailInput?: ElementRef<HTMLInputElement>;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.emailInput?.nativeElement.focus();
  }
}
