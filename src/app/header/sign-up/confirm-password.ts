import { FormGroup } from '@angular/forms';

export function confirmPassword(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmPasswordField = formGroup.get('confirmPassword');
  const confirmPassword = confirmPasswordField?.value;

  if (confirmPasswordField?.valid && password != confirmPassword) {
    return { confirmPassword: true };
  }

  return null;
}
