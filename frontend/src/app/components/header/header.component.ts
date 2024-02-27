import { Component} from '@angular/core';
import { ScrollButtonComponent } from '../../scroll-button/scroll-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
