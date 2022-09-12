import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { RegisterRequestInterface } from "../types/registerRequest.interface"
import { environment } from "src/environments/environment"
import { AuthResponseInterface } from "../types/authResponse.interface"
import { map } from "rxjs/operators"
import { LoginRequestInterface } from "../types/loginRequest.interface"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + "/users"
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiURL + "/users/login"
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiURL + "/user"
    return this.http
      .get<AuthResponseInterface>(url)
      .pipe(map(this.getUser))
  }
  fetchCharacters() {
    return this.http
      .get('https://swapi.dev/api/people/').pipe(map((s: any) => console.log(s.results)))
  }
}
