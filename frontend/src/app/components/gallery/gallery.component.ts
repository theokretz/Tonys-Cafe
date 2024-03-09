import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent {

}
