import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  audio = new Audio('assets/audio/wah.mp3');

  playAudio() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}