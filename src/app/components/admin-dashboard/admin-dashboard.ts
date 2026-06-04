import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ProjectService,
  Project
} from '../../services/project.service';

import {
  SkillService,
  Skill
} from '../../services/skill';

import {
  UserService,
  User
} from '../../services/user';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {

  projects: Project[] = [];
  skills: Skill[] = [];
  users: User[] = [];

  showProjectModal = false;
  showSkillModal = false;

  newProject: Project = {
    heading: '',
    description: '',
    link: ''
  };

  newSkill: Skill = {
    heading: '',
    description: '',
    link: ''
  };

  constructor(
    private projectService: ProjectService,
    private skillService: SkillService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    console.log('Admin Dashboard Loaded');

    this.loadProjects();
    this.loadSkills();
    this.loadUsers();
  }

  loadProjects(): void {

    this.projectService.getAllProjects().subscribe({
      next: (data) => {

        console.log('Projects:', data);

        this.projects = [...data];

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadSkills(): void {

    this.skillService.getAllSkills().subscribe({
      next: (data) => {

        console.log('Skills:', data);

        this.skills = [...data];

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadUsers(): void {

    this.userService.getAllUsers().subscribe({
      next: (data) => {

        console.log('Users:', data);

        this.users = [...data];

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  openSkillModal() {
    this.showSkillModal = true;
  }

  closeSkillModal() {
    this.showSkillModal = false;
  }

  saveSkill() {

    if (
      !this.newSkill.heading.trim() ||
      !this.newSkill.description.trim() ||
      !this.newSkill.link.trim()
    ) {
      alert('Please fill all fields');
      return;
    }

    this.skillService.addSkill(this.newSkill)
      .subscribe({
        next: () => {

          alert('Skill added successfully');

          this.newSkill = {
            heading: '',
            description: '',
            link: ''
          };

          this.closeSkillModal();

          this.loadSkills();
        },
        error: (error) => {
          console.error(error);
          alert('Error adding skill');
        }
      });
  }

  deleteSkill(id: number) {

    if (!confirm('Delete this skill?')) {
      return;
    }

    this.skillService.deleteSkill(id)
      .subscribe({
        next: () => {

          alert('Skill deleted successfully');

          this.loadSkills();
        },
        error: (error) => {
          console.error(error);
          alert('Error deleting skill');
        }
      });
  }

  openProjectModal() {
    this.showProjectModal = true;
  }

  closeProjectModal() {
    this.showProjectModal = false;
  }

  saveProject() {

    if (
      !this.newProject.heading.trim() ||
      !this.newProject.description.trim() ||
      !this.newProject.link.trim()
    ) {
      alert('Please fill all fields');
      return;
    }

    this.projectService.addProject(this.newProject)
      .subscribe({
        next: () => {

          alert('Project added successfully');

          this.newProject = {
            heading: '',
            description: '',
            link: ''
          };

          this.closeProjectModal();

          this.loadProjects();
        },
        error: (error) => {
          console.error(error);
          alert('Error adding project');
        }
      });
  }

  deleteProject(id: number) {

    if (!confirm('Delete this project?')) {
      return;
    }

    this.projectService.deleteProject(id)
      .subscribe({
        next: () => {

          alert('Project deleted successfully');

          this.loadProjects();
        },
        error: (error) => {
          console.error(error);
          alert('Error deleting project');
        }
      });
  }
}