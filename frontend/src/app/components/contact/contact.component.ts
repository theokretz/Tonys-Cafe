import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Email} from "../../dtos/email";
import {EmailService} from "../../services/email.service";
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from "@angular/common";
import {GoogleMap, MapMarker} from "@angular/google-maps";
import {environment} from "../../../environment/environment";


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
        lat: 48.39406295120917,
        lng: 15.577823410930153
    };
    marker = {
        position: { lat: 48.39406295120917, lng: 15.577823410930153 },
    }
    zoom = 16;

    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }



   async initMap(): Promise<void> {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };

    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    // @ts-ignore
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

    // The map, centered at Uluru
    const map = new Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 4,
          center: position,
          mapId: 'DEMO_MAP_ID',
        }
    );

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: 'Uluru'
    });

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

    protected readonly environment = environment;
}
