import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';

@Component({
  selector: 'sc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUserCircle = faUserCircle;
  faSignInAlt = faSignInAlt;

  constructor(
      private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(SignInComponent);
  }
}
