import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../header/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../share/component/vmessage/vmessage.module';
import { SignUpService } from '../header/sign-up/sign-up.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  providers: [

  ]
})
export class HomeModule { }
