import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/portfolio/user';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUrl}/getAllUsers`
    );
  }

  addUser(user: User): Observable<User> {
  return this.http.post<User>(
    `${this.apiUrl}/add`,
    user
  );
}
}
