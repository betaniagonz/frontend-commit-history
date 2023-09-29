import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
    providers: [provideRouter(APP_ROUTES), importProvidersFrom(BrowserModule), provideAnimations(), importProvidersFrom(HttpClientModule)]
})
  .catch(err => console.error(err));
