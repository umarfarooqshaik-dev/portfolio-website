import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserLog {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  login(user: UserLog): Observable<string> {
    return this.http.post(this.apiUrl, user, {
      responseType: 'text'
    });
  }
}