import { ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(
  passwordControl: string,
  rePasswordControl: string
): ValidatorFn {
  return (control) => {
    const passFirstControl = control.get(passwordControl);
    const passSecondControl = control.get(rePasswordControl);
    const areMatching = passFirstControl?.value == passSecondControl?.value;
    // console.log({ areMatching });

    return areMatching ? null : { matchPasswordValidator: true };
  };
}
