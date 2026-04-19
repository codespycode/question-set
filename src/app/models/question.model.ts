export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: number;
  url: string;
  topic: string;
  difficulty: Difficulty;
  done?: boolean;
}

export interface HistoryEntry {
  timestamp: string;
  questions: Question[];
}
