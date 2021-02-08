import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SignUp } from './SignUp';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) { }

  signUp(signUp: SignUp): Observable<any> {
    return this.http.post('http://localhost:8080/sign-up', signUp);
  }
}
