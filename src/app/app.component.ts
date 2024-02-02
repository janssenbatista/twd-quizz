import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuizzComponent } from './quizz/quizz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QuizzComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'twd-quizz';
  isPlaying: boolean = true;

  constructor() {}

  toggleSound() {
    this.isPlaying = !this.isPlaying;
  }
}
