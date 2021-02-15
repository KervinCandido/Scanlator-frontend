import { AbstractControl } from '@angular/forms';

export function confirmPassword(abstractControl: AbstractControl) {
  const password = abstractControl.get('password')?.value;
  const confirmPasswordField = abstractControl.get('confirmPassword');
  const confirmPassword = confirmPasswordField?.value;

  if (confirmPasswordField?.valid && password != confirmPassword) {
    return { confirmPassword: true };
  }

  return null;
}
