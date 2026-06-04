import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService, Skill } from '../../services/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills implements OnInit {

  skills: Skill[] = [];

  constructor(
    private skillService: SkillService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillService.getAllSkills().subscribe({
      next: (data) => {

        this.skills = [...data];

        this.cdr.detectChanges();

        console.log('Skills:', this.skills);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}