import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInForm } from './SignInForm';
import { Observable } from 'rxjs';
import { SignInResponse } from './SignInResponse';

@Injectable()
export class SignInService {

  constructor(
    private http: HttpClient
  ) {}


  signIn(signInForm: SignInForm): Observable<SignInResponse> {
    return this.http.post<SignInResponse>('http://localhost:8080/sign-in', signInForm);
  }
}
