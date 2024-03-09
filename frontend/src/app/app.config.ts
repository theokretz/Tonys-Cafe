import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LightgalleryModule } from 'lightgallery/angular'
import { GoogleMapsModule  } from '@angular/google-maps';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})),
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
  ]
};
