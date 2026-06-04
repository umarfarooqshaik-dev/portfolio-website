import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Home, Services,Skills,Projects, Contact,Footer],
  templateUrl: './app.html',   // or './app.component.html'
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio-angular');
}