import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule, Routes } from "@angular/router"
import { ReactiveFormsModule } from "@angular/forms"

import { RegisterComponent } from "src/app/auth/components/register/register.component"
import { AuthService } from "./services/auth.service"
import { EffectsModule } from "@ngrx/effects"
import { RegisterEffect } from "./store/effects/register.effect"
import { reducers } from "./store/redusers"
import { StoreModule } from "@ngrx/store"
import { BackEndErrorsModule } from "../shared/modules/back-end-errors/back-end-errors.module"
import { PersistanceService } from "../shared/service/persistance.service"
import { LoginEffect } from "./store/effects/login.effect"
import { LoginComponent } from "./components/login/login.component"
import { CurrentUserEffect } from "./store/effects/currentUser.effect"

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([RegisterEffect, LoginEffect, CurrentUserEffect]),
    StoreModule.forFeature("auth", reducers),
    BackEndErrorsModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule { }
