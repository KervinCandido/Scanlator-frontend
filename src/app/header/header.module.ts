import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { VmessageModule } from '../share/component/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpService } from './sign-up/sign-up.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    SignUpService
  ]
})
export class HeaderModule { }
