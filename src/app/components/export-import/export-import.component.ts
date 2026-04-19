import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { LoggerService } from '../../services/logger.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-export-import',
  standalone: true,
  templateUrl: './export-import.component.html',
  styleUrl: './export-import.component.css'
})
export class ExportImportComponent {
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private storage: StorageService, private logger: LoggerService) {}

  exportQuestions(): void {
    const questions = this.storage.getQuestions().map(({ done, ...rest }) => rest as Question);
    const blob = new Blob([JSON.stringify(questions, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'questions.json';
    a.click();
    URL.revokeObjectURL(url);
    this.logger.info('ExportImport', 'Exported questions', { count: questions.length });
    this.showMessage(`Exported ${questions.length} questions.`, 'success');
  }

  importQuestions(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        const questions: Question[] = Array.isArray(data) ? data : [];

        if (!questions.length || !questions[0].url) {
          this.showMessage('Invalid file. Expected an array of questions with url, topic, difficulty.', 'error');
          input.value = '';
          return;
        }

        const addedCount = this.storage.mergeQuestions(questions);
        if (addedCount > 0) {
          this.logger.info('ExportImport', 'Imported questions', { added: addedCount });
          this.showMessage(`Imported ${addedCount} new question${addedCount > 1 ? 's' : ''}. Duplicates were skipped.`, 'success');
        } else {
          this.showMessage('No new questions to import — all already exist.', 'success');
        }
        input.value = '';
      } catch {
        this.showMessage('Failed to parse file. Make sure it is valid JSON.', 'error');
        input.value = '';
      }
    };
    reader.readAsText(file);
  }

  private showMessage(text: string, type: 'success' | 'error'): void {
    this.message = text;
    this.messageType = type;
    setTimeout(() => (this.message = ''), 5000);
  }
}
