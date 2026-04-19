import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionService, FilterOptions } from '../../services/question.service';
import { StorageService } from '../../services/storage.service';
import { Question, Difficulty } from '../../models/question.model';

@Component({
  selector: 'app-question-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './question-picker.component.html',
  styleUrl: './question-picker.component.css'
})
export class QuestionPickerComponent implements OnInit {
  questions: Question[] = [];
  count = 3;
  counts = [1, 2, 3, 4, 5];
  topics: string[] = [];
  difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  selectedTopic = '';
  selectedDifficulty: Difficulty | '' = '';

  loading = false;
  error = '';

  constructor(
    private questionService: QuestionService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    // restore last session
    const saved = this.storage.getLastSelected();
    if (saved.length) {
      const doneIds = this.storage.getDoneIds();
      this.questions = saved.map(q => ({ ...q, done: doneIds.includes(q.id) }));
      this.count = saved.length;
    }

    // load topics for filter dropdown
    this.questionService.getTopics().subscribe(t => (this.topics = t));
  }

  pickQuestions(): void {
    this.loading = true;
    this.error = '';
    const filters: FilterOptions = {
      topic: this.selectedTopic || undefined,
      difficulty: this.selectedDifficulty || undefined
    };
    this.questionService.getRandomQuestions(this.count, filters).subscribe({
      next: q => {
        this.questions = q;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }

  refresh(): void {
    this.pickQuestions();
  }

  toggleDone(question: Question): void {
    question.done = this.storage.toggleDone(question.id);
  }

  extractName(url: string): string {
    const parts = url.replace(/\/+$/, '').split('/');
    return parts[parts.length - 1]
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
}
