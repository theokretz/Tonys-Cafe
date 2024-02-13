import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LightgalleryModule } from 'lightgallery/angular'
import { GoogleMapsModule  } from '@angular/google-maps';
import { Loader } from "@googlemaps/js-api-loader"



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 1000,
      closeButton: true,
      progressBar: true,
      tapToDismiss: false,
      positionClass: 'toast-top-right',
    })),
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(LightgalleryModule),
      importProvidersFrom(GoogleMapsModule),
      importProvidersFrom(Loader),
  ]
};
