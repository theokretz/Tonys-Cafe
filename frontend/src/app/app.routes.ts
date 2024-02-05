import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'kontakt', component: ContactComponent},
    {path: 'überuns', component: AboutusComponent}
];
