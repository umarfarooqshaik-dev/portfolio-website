import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Skill {
  id?: number;
  heading: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {

  private apiUrl = 'http://localhost:8080/portfolio/skills';

  constructor(private http: HttpClient) {}

  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(
      `${this.apiUrl}/all`
    );
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(
      `${this.apiUrl}/add`,
      skill
    );
  }

  deleteSkill(id: number) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}