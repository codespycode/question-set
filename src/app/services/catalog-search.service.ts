import { Injectable } from '@angular/core';
import { PROBLEM_CATALOG, CatalogEntry } from '../models/problem-catalog';

export interface SearchResult {
  entry: CatalogEntry;
  /** The specific platform URL chosen (first by default) */
  platform: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class CatalogSearchService {
  private catalog = PROBLEM_CATALOG;

  search(query: string, limit = 15): SearchResult[] {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    const tokens = q.split(/\s+/);

    const scored: { score: number; entry: CatalogEntry }[] = [];

    for (const entry of this.catalog) {
      const name = entry.name.toLowerCase();
      const topic = entry.topic.toLowerCase();
      const platforms = entry.urls.map(u => u.platform.toLowerCase()).join(' ');
      const blob = `${name} ${topic} ${platforms}`;

      let score = 0;

      // Exact name match → highest score
      if (name === q) {
        score += 100;
      } else if (name.startsWith(q)) {
        score += 60;
      } else if (name.includes(q)) {
        score += 40;
      }

      // Token matching
      let allTokensMatch = true;
      for (const t of tokens) {
        if (blob.includes(t)) {
          score += 10;
          if (name.includes(t)) score += 5;
        } else {
          allTokensMatch = false;
        }
      }
      if (allTokensMatch && tokens.length > 1) score += 20;

      if (score > 0) {
        scored.push({ score, entry });
      }
    }

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, limit).map(s => ({
      entry: s.entry,
      platform: s.entry.urls[0].platform,
      url: s.entry.urls[0].url,
    }));
  }
}
