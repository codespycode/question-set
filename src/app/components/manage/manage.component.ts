import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../../services/question.service';
import { StorageService } from '../../services/storage.service';
import { Question, Difficulty } from '../../models/question.model';
import { CatalogSearchService, SearchResult } from '../../services/catalog-search.service';
import { LoggerService } from '../../services/logger.service';
import { CatalogEntry } from '../../models/problem-catalog';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent implements OnInit {
  // password gate
  isAuthenticated = false;
  passwordInput = '';
  passwordError = '';
  private readonly MANAGE_PASS = 'admin123';

  allQuestions: Question[] = [];
  topics: string[] = [];
  difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  // form fields
  newUrl = '';
  newTopic = '';
  newCustomTopic = '';
  newDifficulty: Difficulty = 'Medium';
  useCustomTopic = false;

  // search / typeahead
  searchQuery = '';
  searchResults: SearchResult[] = [];
  showDropdown = false;
  highlightIndex = -1;
  selectedEntry: CatalogEntry | null = null;
  selectedPlatformIndex = 0;

  message = '';
  filterTopic = '';
  loadError = '';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(
    private questionService: QuestionService,
    private storage: StorageService,
    private catalogSearch: CatalogSearchService,
    private http: HttpClient,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    // no-op until authenticated
  }

  checkPassword(): void {
    if (this.passwordInput === this.MANAGE_PASS) {
      this.isAuthenticated = true;
      this.passwordError = '';
      this.syncAndLoad();
    } else {
      this.passwordError = 'Incorrect password.';
    }
  }

  onPasswordKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.checkPassword();
    }
  }

  /** Merge any new questions from questions.json, then load the list. */
  private syncAndLoad(): void {
    this.http.get<Question[]>('questions.json').subscribe({
      next: (seed) => {
        this.storage.mergeQuestions(seed);
        this.loadQuestions();
      },
      error: () => this.loadQuestions()
    });
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event): void {
    const el = (e.target as HTMLElement);
    if (!el.closest('.search-wrapper')) {
      this.showDropdown = false;
    }
  }

  loadQuestions(): void {
    this.loadError = '';
    this.questionService.getAllQuestions().subscribe({
      next: qs => {
        this.allQuestions = qs;
        this.topics = [...new Set(qs.map(q => q.topic).filter(Boolean))].sort();
      },
      error: () => {
        this.loadError = 'Unable to load questions. Please refresh.';
      }
    });
  }

  get filteredQuestions(): Question[] {
    if (!this.filterTopic) return this.allQuestions;
    return this.allQuestions.filter(q => q.topic === this.filterTopic);
  }

  get effectiveTopic(): string {
    return this.useCustomTopic ? this.newCustomTopic.trim() : this.newTopic;
  }

  // ── Search / Typeahead ──

  onSearchInput(): void {
    this.selectedEntry = null;
    this.selectedPlatformIndex = 0;
    if (this.searchQuery.trim().length < 2) {
      this.searchResults = [];
      this.showDropdown = false;
      return;
    }
    this.searchResults = this.catalogSearch.search(this.searchQuery);
    this.showDropdown = this.searchResults.length > 0;
    this.highlightIndex = -1;
  }

  onSearchKeydown(e: KeyboardEvent): void {
    if (!this.showDropdown) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.highlightIndex = Math.min(this.highlightIndex + 1, this.searchResults.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.highlightIndex = Math.max(this.highlightIndex - 1, 0);
    } else if (e.key === 'Enter' && this.highlightIndex >= 0) {
      e.preventDefault();
      this.selectResult(this.searchResults[this.highlightIndex]);
    } else if (e.key === 'Escape') {
      this.showDropdown = false;
    }
  }

  selectResult(r: SearchResult): void {
    this.selectedEntry = r.entry;
    this.selectedPlatformIndex = 0;
    this.applySelection();
    this.showDropdown = false;
    this.searchQuery = r.entry.name;
  }

  selectPlatform(idx: number): void {
    this.selectedPlatformIndex = idx;
    this.applySelection();
  }

  private applySelection(): void {
    if (!this.selectedEntry) return;
    const chosen = this.selectedEntry.urls[this.selectedPlatformIndex];
    this.newUrl = chosen.url;
    this.newDifficulty = this.selectedEntry.difficulty;
    // Set topic
    const topic = this.selectedEntry.topic;
    if (this.topics.includes(topic)) {
      this.useCustomTopic = false;
      this.newTopic = topic;
    } else {
      this.useCustomTopic = true;
      this.newCustomTopic = topic;
    }
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.showDropdown = false;
    this.selectedEntry = null;
    this.selectedPlatformIndex = 0;
    this.newUrl = '';
  }

  addQuestion(): void {
    const url = this.newUrl.trim();
    const topic = this.effectiveTopic;

    if (!url || !topic) {
      this.message = 'Please fill in URL and topic.';
      return;
    }

    // Check for duplicate URL
    const normalizedUrl = url.replace(/\/+$/, '').toLowerCase();
    const exists = this.allQuestions.some(
      q => q.url.replace(/\/+$/, '').toLowerCase() === normalizedUrl
    );
    if (exists) {
      this.message = 'This question already exists.';
      setTimeout(() => (this.message = ''), 3000);
      return;
    }

    const question: Question = {
      id: this.storage.getNextId(),
      url,
      topic,
      difficulty: this.newDifficulty
    };

    this.storage.addQuestion(question);
    this.resetForm();
    this.loadQuestions();
    this.logger.info('Manage', 'Question added', { id: question.id, topic: question.topic });
    this.message = `Added: ${this.extractName(url)}`;
    setTimeout(() => (this.message = ''), 3000);
  }

  removeQuestion(id: number): void {
    if (!confirm('Remove this question?')) return;
    this.storage.removeQuestion(id);
    this.loadQuestions();
    this.logger.info('Manage', 'Question removed', { id });
    this.message = 'Question removed.';
    setTimeout(() => (this.message = ''), 3000);
  }

  private resetForm(): void {
    this.newUrl = '';
    this.newTopic = '';
    this.newCustomTopic = '';
    this.newDifficulty = 'Medium';
    this.useCustomTopic = false;
    this.searchQuery = '';
    this.searchResults = [];
    this.showDropdown = false;
    this.selectedEntry = null;
    this.selectedPlatformIndex = 0;
  }

  extractName(url: string): string {
    const parts = url.replace(/\/+$/, '').split('/');
    let slug = parts[parts.length - 1];
    if (/^\d+$/.test(slug) && parts.length > 1) {
      slug = parts[parts.length - 2];
    }
    return slug
      .replace(/\d+$/, '')
      .replace(/-+$/, '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
}
