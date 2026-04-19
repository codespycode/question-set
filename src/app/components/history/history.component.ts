import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { LoggerService } from '../../services/logger.service';
import { HistoryEntry } from '../../models/question.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  history: HistoryEntry[] = [];

  constructor(private storage: StorageService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.history = this.storage.getHistory();
  }

  clearHistory(): void {
    if (confirm('Clear all history?')) {
      this.storage.clearHistory();
      this.history = [];
      this.logger.info('History', 'History cleared');
    }
  }

  extractName(url: string): string {
    const parts = url.replace(/\/+$/, '').split('/');
    return parts[parts.length - 1]
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString();
  }
}
