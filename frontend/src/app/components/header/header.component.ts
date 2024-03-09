import { Component} from '@angular/core';
import { ScrollButtonComponent } from '../scroll-button/scroll-button.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [ScrollButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
