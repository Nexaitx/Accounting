import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
form = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  };

  submitForm() {
    console.log(this.form);

    alert('Message sent successfully!');
  }
}
