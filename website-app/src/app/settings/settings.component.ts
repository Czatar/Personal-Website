import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  isFontSliderVisible: boolean = false;
  isOpacitySliderVisible: boolean = false;
  fontSize: number = 16;
  opacity: number = 0.2; // Default opacity value
  areButtonsVisible: boolean = false;

  ngOnInit() {
    this.loadSettings();
  }

  toggleButtonsVisibility() {
    this.areButtonsVisible = !this.areButtonsVisible;
  }

  toggleFontSlider() {
    this.isFontSliderVisible = !this.isFontSliderVisible;
  }

  adjustFontSize() {
    document.body.style.fontSize = `${this.fontSize}px`;
    this.saveSettings();
  }

  toggleOpacitySlider() {
    this.isOpacitySliderVisible = !this.isOpacitySliderVisible;
  }

  adjustOpacity() {
    document.documentElement.style.setProperty('--background-opacity', this.opacity.toString());
    this.saveSettings();
  }

  toggleTheme() {
    this.invertColor('--color-1');
    this.invertColor('--color-2');
    this.invertColor('--color-3');
    this.invertColor('--contrast-1');
    this.invertColor('--contrast-3');
    this.saveSettings();
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

  saveSettings() {
    localStorage.setItem('fontSize', this.fontSize.toString());
    localStorage.setItem('themeColor1', getComputedStyle(document.documentElement).getPropertyValue('--color-1').trim());
    localStorage.setItem('themeColor2', getComputedStyle(document.documentElement).getPropertyValue('--color-2').trim());
    localStorage.setItem('themeColor3', getComputedStyle(document.documentElement).getPropertyValue('--color-3').trim());
    localStorage.setItem('themeContrast1', getComputedStyle(document.documentElement).getPropertyValue('--contrast-1').trim());
    localStorage.setItem('themeContrast3', getComputedStyle(document.documentElement).getPropertyValue('--contrast-3').trim());
    localStorage.setItem('backgroundOpacity', this.opacity.toString()); // Save opacity
  }

  loadSettings() {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      this.fontSize = +savedFontSize;
      document.body.style.fontSize = `${this.fontSize}px`;
    }

    const themeColor1 = localStorage.getItem('themeColor1');
    const themeColor2 = localStorage.getItem('themeColor2');
    const themeColor3 = localStorage.getItem('themeColor3');
    const themeContrast1 = localStorage.getItem('themeContrast1');
    const themeContrast3 = localStorage.getItem('themeContrast3');
    const savedOpacity = localStorage.getItem('backgroundOpacity');

    if (themeColor1) {
      document.documentElement.style.setProperty('--color-1', themeColor1);
    }
    if (themeColor2) {
      document.documentElement.style.setProperty('--color-2', themeColor2);
    }
    if (themeColor3) {
      document.documentElement.style.setProperty('--color-3', themeColor3);
    }
    if (themeContrast1) {
      document.documentElement.style.setProperty('--contrast-1', themeContrast1);
    }
    if (themeContrast3) {
      document.documentElement.style.setProperty('--contrast-3', themeContrast3);
    }
    if (savedOpacity) {
      this.opacity = +savedOpacity;
      document.documentElement.style.setProperty('--background-opacity', this.opacity.toString());
    }
  }
}