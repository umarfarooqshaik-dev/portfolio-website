import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {

  user: User = {
    name: '',
    email: '',
    phoneNumber: null as any,
    subject: '',
    message: ''
  };

  constructor(private userService: UserService) {}

submitForm(form: any) {

  if (form.invalid) {

    alert('Please fill all fields correctly.');

    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched();
    });

    return;
  }

  this.userService.addUser(this.user)
    .subscribe({
      next: () => {

        alert('Message sent successfully');

        this.user = {
          name: '',
          email: '',
          phoneNumber: undefined as any,
          subject: '',
          message: ''
        };

        form.resetForm();
      },

      error: (error) => {
        console.error(error);
        alert('Error sending message');
      }
    });
}
}