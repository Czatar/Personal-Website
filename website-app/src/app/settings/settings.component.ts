import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  isSliderVisible: boolean = false;
  fontSize: number = 16;
  areButtonsVisible: boolean = false;

  toggleButtonsVisibility() {
    this.areButtonsVisible = !this.areButtonsVisible;
  }

  toggleSlider() {
    this.isSliderVisible = !this.isSliderVisible;
  }

  adjustFontSize() {
    document.body.style.fontSize = `${this.fontSize}px`;
  }

  toggleTheme() {
    this.invertColor('--color-1');
    this.invertColor('--color-2');
    this.invertColor('--color-3');
    this.invertColor('--contrast-1');
    this.invertColor('--contrast-3');
  }

  invertColor(variable: string) {
    const currentColor = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    const invertedColor = this.calculateInvertedColor(currentColor);
    document.documentElement.style.setProperty(variable, invertedColor);
  }

  calculateInvertedColor(hex: string): string {
    if (!hex.startsWith('#')) {
      return hex; // Handle non-hex values (e.g., rgba, named colors) appropriately if needed
    }
    const color = parseInt(hex.slice(1), 16);
    const invertedColor = 0xffffff ^ color;
    return `#${invertedColor.toString(16).padStart(6, '0')}`;
  }
}
