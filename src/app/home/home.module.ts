import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../share/component/vmessage/vmessage.module';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule
  ]
})
export class HomeModule { }
