import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Home } from '../home/home';
import { Services } from '../services/services';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    Navbar,
    Home,
    Services,
    Skills,
    Projects,
    Contact,
    Footer
  ],
  templateUrl: './portfolio.html'
})
export class Portfolio {}