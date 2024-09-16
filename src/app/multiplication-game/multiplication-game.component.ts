import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-multiplication-game',
  templateUrl: './multiplication-game.component.html',
  styleUrls: [],
  animations: [
    trigger('fadeOut', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('1s')
      ])
    ])
  ]
})
export class MultiplicationGameComponent {
  num1: number;
  num2: number;
  answer: number | null;
  message: string;
  questionCount: number;
  correctAnswers: number;
  messageState: 'visible' | 'hidden'; // Add this line

  constructor() {
    this.questionCount = 0;
    this.correctAnswers = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.answer = 0;
    this.message = '';
    this.messageState = 'visible'; // Initialize the state
    this.generateQuestion();
  }

  generateQuestion() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.answer = null;
  }

  checkAnswer() {
    if (this.answer === this.num1 * this.num2) {
      this.message = 'Correct!';
      this.correctAnswers++;
    } else {
      this.message = 'Wrong!';
    }
    this.questionCount++;
    if (this.questionCount < 10) {
      this.generateQuestion();
    } else {
      this.message = `Game over! You got ${this.correctAnswers} out of 10 correct.`;
    }

    // Trigger the fade-out animation after 3 seconds
    setTimeout(() => {
      this.messageState = 'hidden';
      setTimeout(() => {
        this.message = '';
        this.messageState = 'visible'; // Reset state for next message
      }, 1000); // Match the duration of the fade-out animation
    }, 3000);
  }
}