import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 1000,
      closeButton: true,
      progressBar: true,
      tapToDismiss: false,
    })),
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(ToastrService),
  ]
};
