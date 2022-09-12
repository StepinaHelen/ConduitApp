import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { EffectsModule } from "@ngrx/effects"
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { environment } from "src/environments/environment"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AuthModule } from "./auth/auth.module"

import { GlobalFeedModule } from "./global-feed/global-feed.module"
import { TopBarModule } from "./shared/modules/top-bar/top-bar.module"
import { AuthInterceptor } from "./shared/service/auth-interceptor.service"
import { PersistanceService } from "./shared/service/persistance.service"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 15,//количество actions которое мы хотим видеть в консоли 
      logOnly: environment.production,
      autoPause: true,
    }),
    TopBarModule,
    GlobalFeedModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
