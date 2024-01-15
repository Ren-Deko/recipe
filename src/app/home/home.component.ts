import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Add ElementRef to your constructor
  constructor(private el: ElementRef) {}

  // Listen for scroll events on the window
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Get the current scrollable section and the next section
    const currentSection = this.el.nativeElement.querySelector('.scroll-section');
    const nextSection = this.el.nativeElement.querySelector('.recipes-section');

    // Check if the user has scrolled to the bottom of the current section
    if (currentSection.scrollHeight - currentSection.scrollTop === currentSection.clientHeight) {
      // If the bottom is reached, show the next section
      nextSection.style.display = 'block';
    }
  }
}
