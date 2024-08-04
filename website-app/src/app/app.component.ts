import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'website-app';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.injectRainbowAnimation();
  }

  injectRainbowAnimation() {
    const styleSheet = this.renderer.createElement('style');
    styleSheet.type = 'text/css';
    const hueSteps = 20; // Increase for finer transitions
    let keyframes = `@keyframes rainbow {`;

    for (let i = 0; i <= 100; i += 100 / hueSteps) {
      const hue = (i / 100) * 360;
      keyframes += `
        ${i}% {
          box-shadow: 0 0 10px 2px hsla(${hue}, 100%, 50%, 0.3);
        }
      `;
    }

    keyframes += `}`;

    styleSheet.innerHTML = keyframes;
    this.renderer.appendChild(document.head, styleSheet);
  }
}