import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ProjectService,
  Project
} from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects implements OnInit {

  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {

    this.projectService.getAllProjects().subscribe({
      next: (data) => {

        console.log('Projects Loaded:', data);

        this.projects = [...data];

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('Error loading projects', err);
      }
    });

  }
}