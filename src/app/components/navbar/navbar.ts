import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  showModal = false;

  username = '';
  password = '';

constructor(
  private loginService: LoginService,
  private router: Router
) {}
  openLoginModal(event: Event) {
    event.preventDefault();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  login() {

    const user = {
      username: this.username,
      password: this.password
    };

this.loginService.login(user).subscribe({
  next: (response) => {

    if (response === 'Login successful!') {

      alert(response);

      this.showModal = false;

this.router.navigate(['/admin']);
    } else {

      alert(response);

    }
  },
  error: (error) => {
    console.error(error);
    alert('Login failed');
  }
});
  }
}