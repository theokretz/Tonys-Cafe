import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Email} from "../../dtos/email";
import {EmailService} from "../../services/email.service";
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ToastrModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: Email = new Email();
  constructor(private emailService: EmailService,private notification: ToastrService) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.emailService.sendEmail(this.email).subscribe({
        next: () => {
          this.notification.success('Nachricht erfolgreich gesendet');
        },
        error: error => {
          console.error('Could not send email', error);
          this.notification.error('Nachricht konnte nicht gesendet werden', error.error.errors);
        }
      });
    }
  }
}
