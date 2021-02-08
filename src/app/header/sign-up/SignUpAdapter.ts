import { SignUp } from './SignUp';
import { SignUpForm } from './SignUpForm';

export class SignUpAdapter extends SignUp {

  constructor(signUpForm: SignUpForm) {
    super();
    this.name = signUpForm.name;
    this.email = signUpForm.email;
    this.password = signUpForm.password;
  }
}
