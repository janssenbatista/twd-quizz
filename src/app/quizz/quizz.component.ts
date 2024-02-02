import { Component } from '@angular/core';
import { Question, QuizzService } from '../services/quizz.service';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent {
  questions!: Question[];
  currentQuestion: number = 0;
  isGameEnded: boolean = false;
  answers: Map<string, number> = new Map<string, number>();
  characterPhoto: string = '';
  characterName: string = '';
  resultMessage: string = '';

  constructor(private readonly quizzService: QuizzService) {}

  ngOnInit() {
    this.questions = this.quizzService.getQuestions();
  }

  resetGame() {
    this.currentQuestion = 0;
    this.isGameEnded = false;
    this.answers = new Map<string, number>();
  }

  setNextQuestion(value: string) {
    this.answers.set(value, (this.answers.get(value) || 0) + 1);
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.showResult();
    }
  }

  showResult() {
    let maxAnswer = Number.MIN_SAFE_INTEGER;
    let maxValue = '';
    for (const [key, value] of this.answers) {
      if (value > maxAnswer) {
        maxAnswer = value;
        maxValue = key;
      }
    }
    switch (maxValue) {
      case 'a': {
        this.characterPhoto = '../../assets/images/rick';
        this.characterName = 'Rick Grimes';
        this.resultMessage =
          'Você seria como Rick Grimes, um líder corajoso e determinado.';
        break;
      }
      case 'b': {
        this.characterPhoto = '../../assets/images/daryl';
        this.characterName = 'Daryl Dixon';
        this.resultMessage =
          'Seu perfil é semelhante ao de Daryl Dixon, um estrategista habilidoso.';
        break;
      }
      case 'c': {
        this.characterPhoto = '../../assets/images/carol';
        this.characterName = 'Carol Peletier';
        this.resultMessage =
          'Você compartilha características com Carol Peletier, focado(a) na sobrevivência prática e emocional.';
        break;
      }
      default: {
        this.characterPhoto = '../../assets/images/michonne';
        this.characterName = 'Michonne';
        this.resultMessage =
          'Suas escolhas indicam semelhanças com Michonne, uma mediadora eficaz e prática.';
      }
    }
    this.isGameEnded = true;
  }
}
