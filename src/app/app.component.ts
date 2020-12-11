import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './home/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(SignUpComponent);
  }
}
