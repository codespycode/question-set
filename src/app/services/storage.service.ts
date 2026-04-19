import { Injectable } from '@angular/core';
import { Question, HistoryEntry } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly QUESTIONS_KEY = 'qb_questions';
  private readonly DONE_KEY = 'qb_done_ids';
  private readonly HISTORY_KEY = 'qb_history';
  private readonly LAST_KEY = 'qb_last_selected';

  // --- Questions Pool ---

  isSeeded(): boolean {
    return localStorage.getItem(this.QUESTIONS_KEY) !== null;
  }

  getQuestions(): Question[] {
    return this.readJson<Question[]>(this.QUESTIONS_KEY) ?? [];
  }

  setQuestions(questions: Question[]): void {
    this.writeJson(this.QUESTIONS_KEY, questions);
  }

  addQuestion(question: Question): void {
    const questions = this.getQuestions();
    questions.push(question);
    this.writeJson(this.QUESTIONS_KEY, questions);
  }

  removeQuestion(id: number): void {
    const questions = this.getQuestions().filter(q => q.id !== id);
    this.writeJson(this.QUESTIONS_KEY, questions);
  }

  getNextId(): number {
    const questions = this.getQuestions();
    if (questions.length === 0) return 1;
    return Math.max(...questions.map(q => q.id)) + 1;
  }

  /**
   * Merge incoming questions into the pool, skipping duplicates by URL.
   * Returns the count of newly added questions.
   */
  mergeQuestions(incoming: Question[]): number {
    const existing = this.getQuestions();
    const existingUrls = new Set(
      existing.map(q => q.url.replace(/\/+$/, '').toLowerCase())
    );

    const newOnes: Question[] = [];
    let nextId = this.getNextId();

    for (const q of incoming) {
      const normalizedUrl = q.url.replace(/\/+$/, '').toLowerCase();
      if (!existingUrls.has(normalizedUrl)) {
        newOnes.push({
          id: nextId++,
          url: q.url,
          topic: q.topic || 'Uncategorized',
          difficulty: q.difficulty || 'Medium'
        });
        existingUrls.add(normalizedUrl);
      }
    }

    if (newOnes.length > 0) {
      this.writeJson(this.QUESTIONS_KEY, [...existing, ...newOnes]);
    }
    return newOnes.length;
  }

  // --- Done IDs ---

  getDoneIds(): number[] {
    return this.readJson<number[]>(this.DONE_KEY) ?? [];
  }

  toggleDone(id: number): boolean {
    const ids = this.getDoneIds();
    const idx = ids.indexOf(id);
    if (idx === -1) {
      ids.push(id);
    } else {
      ids.splice(idx, 1);
    }
    this.writeJson(this.DONE_KEY, ids);
    return idx === -1;
  }

  // --- History ---

  getHistory(): HistoryEntry[] {
    return this.readJson<HistoryEntry[]>(this.HISTORY_KEY) ?? [];
  }

  addHistory(questions: Question[]): void {
    const history = this.getHistory();
    history.unshift({
      timestamp: new Date().toISOString(),
      questions
    });
    if (history.length > 50) {
      history.length = 50;
    }
    this.writeJson(this.HISTORY_KEY, history);
  }

  clearHistory(): void {
    localStorage.removeItem(this.HISTORY_KEY);
  }

  // --- Last Selected ---

  getLastSelected(): Question[] {
    return this.readJson<Question[]>(this.LAST_KEY) ?? [];
  }

  setLastSelected(questions: Question[]): void {
    this.writeJson(this.LAST_KEY, questions);
  }

  // --- Helpers ---

  private readJson<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private writeJson(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
