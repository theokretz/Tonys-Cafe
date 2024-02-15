import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutusComponent} from "./components/aboutus/aboutus.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {MenuComponent} from "./components/menu/menu.component";
import {DatenschutzComponent} from "./components/datenschutz/datenschutz.component";

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Tony\'s Cafe'},
    {path: 'galerie', component: GalleryComponent, title: 'Galerie'},
    {path: 'kontakt', component: ContactComponent,title: 'Kontakt'},
    {path: 'überuns', component: AboutusComponent, title: 'Über uns'},
    {path: 'speisekarte', component: MenuComponent, title: 'Speisekarte'},
    {path: 'datenschutz', component: DatenschutzComponent, title: 'Datenschutz'},
    {path: '**', redirectTo: ''}
];
