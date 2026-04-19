import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Question, Difficulty } from '../models/question.model';
import { StorageService } from './storage.service';

export interface FilterOptions {
  topic?: string;
  difficulty?: Difficulty | '';
}

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private seeded = false;
  private lastPickedIds: number[] = [];

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
    const last = this.storage.getLastSelected();
    this.lastPickedIds = last.map(q => q.id);
    this.seeded = this.storage.isSeeded();
  }

  /**
   * Returns all questions. On first ever load, seeds localStorage
   * from the static questions.json file.
   */
  getAllQuestions(): Observable<Question[]> {
    if (this.seeded) {
      return of(this.storage.getQuestions());
    }
    return this.http.get<Question[]>('questions.json').pipe(
      tap(questions => {
        this.storage.setQuestions(questions);
        this.seeded = true;
      }),
      catchError(() => throwError(() => new Error('Unable to load questions. Please refresh.')))
    );
  }

  getTopics(): Observable<string[]> {
    return this.getAllQuestions().pipe(
      map(qs => [...new Set(qs.map(q => q.topic).filter(Boolean))].sort())
    );
  }

  getRandomQuestions(count: number, filters: FilterOptions = {}): Observable<Question[]> {
    return this.getAllQuestions().pipe(
      map(questions => {
        let filtered = questions;
        if (filters.topic) {
          filtered = filtered.filter(q => q.topic === filters.topic);
        }
        if (filters.difficulty) {
          filtered = filtered.filter(q => q.difficulty === filters.difficulty);
        }

        const fresh = filtered.filter(q => !this.lastPickedIds.includes(q.id));
        const pool = fresh.length >= count ? fresh : filtered;

        const picked = this.shuffle([...pool]).slice(0, Math.min(count, pool.length));
        this.lastPickedIds = picked.map(q => q.id);

        const doneIds = this.storage.getDoneIds();
        const result = picked.map(q => ({ ...q, done: doneIds.includes(q.id) }));

        this.storage.setLastSelected(result);
        this.storage.addHistory(result);

        return result;
      })
    );
  }

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
