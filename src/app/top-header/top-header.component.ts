import { Component } from '@angular/core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {
  faArrowDown = faArrowDown
}
