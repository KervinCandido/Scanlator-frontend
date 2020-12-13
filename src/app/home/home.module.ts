import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../share/component/vmessage/vmessage.module';
import { SignUpService } from './sign-up/sign-up.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    HttpClientModule
  ],
  providers: [
    SignUpService
  ]
})
export class HomeModule { }
