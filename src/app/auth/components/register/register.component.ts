import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { backEndErrorsInterface } from "src/app/shared/types/backEndErrors.interface"
import { AuthService } from "../../services/auth.service"
import { registerAction } from "../../store/actions/register.action"
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from "../../store/selectors"
import { RegisterRequestInterface } from "../../types/registerRequest.interface"

@Component({
  selector: "conduit-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmiting$: Observable<boolean>
  backEndErrors$: Observable<backEndErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store,
  ) { }

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
      username: ["", Validators.required],
      email: "",
      password: "",
    })
  }

  onSubmit() {
    const request: RegisterRequestInterface = { user: this.form.value }
    this.store.dispatch(registerAction({ request }))
  }

}
