import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Email} from "../../dtos/email";
import {EmailService} from "../../services/email.service";
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from "@angular/common";
import {GoogleMap, MapMarker} from "@angular/google-maps";


@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        FormsModule,
        HttpClientModule,
        ToastrModule,
        NgIf,
        GoogleMap,
        MapMarker,
    ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email: Email = new Email();
  map!: google.maps.Map; // Deklariert die map Variable
  constructor(private emailService: EmailService,private notification: ToastrService) {}
  isLoading = false;


    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 48.39395386803803,
        lng: 15.577857720236125
    };
    marker = {
        position: { lat:  48.39395386803803, lng: 15.577857720236125 },
        label: {
            color: 'red',
            text: 'Tony\'s Cafe',
        },
        title: 'Tony\'s Cafe',
        options: { animation: google.maps.Animation.DROP },
    }
    zoom = 16;


    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }

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
