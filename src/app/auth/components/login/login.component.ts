import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { backEndErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction } from '../../store/actions/login.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'conduit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form: FormGroup
  isSubmiting$: Observable<boolean>
  backEndErrors$: Observable<backEndErrorsInterface | null>
  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }
  initializeValues() {
    this.isSubmiting$ = this.store.pipe(select(isSubmittingSelector))
    this.backEndErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: "",
      password: "",
    })
  }

  onSubmit() {
    const request: LoginRequestInterface = {user: this.form.value}
    this.store.dispatch(loginAction({request}))
  }
}
