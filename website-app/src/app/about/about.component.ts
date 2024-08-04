import { Component } from '@angular/core';
import { FadeOnScrollDirective } from '../fade-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
