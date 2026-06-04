import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id?: number;
  heading: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/portfolio/project';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/all`);
  }
  addProject(project: Project) {
  return this.http.post<Project>(
    `${this.apiUrl}/add`,
    project
  );
  
}

deleteProject(id: number) {
  return this.http.delete(
    `${this.apiUrl}/${id}`
  );
}
}