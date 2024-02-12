import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Email} from "../../dtos/email";
import {EmailService} from "../../services/email.service";
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ToastrModule,
    NgIf,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: Email = new Email();
  constructor(private emailService: EmailService,private notification: ToastrService) {}
  isLoading = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.emailService.sendEmail(this.email).subscribe({
        next: () => {
          console.log('Email sent successfully');
          this.notification.success('Nachricht erfolgreich gesendet', 'Vielen Dank!');
          form.resetForm();
          this.email = new Email();
          this.isLoading = false;
        },
        error: error => {
          console.error('Could not send email', error);
          this.notification.error('Versuchen Sie es später erneut', 'Nachricht konnte nicht gesendet werden', error.error.errors);
          this.isLoading = false;
        }
      });
    }
  }
}
