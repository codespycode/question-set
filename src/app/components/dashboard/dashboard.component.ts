import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Question, HistoryEntry, Difficulty } from '../../models/question.model';

interface DayActivity {
  date: string;        // YYYY-MM-DD
  label: string;       // "Mon 14"
  picked: number;
  done: number;
}

interface TopicStat {
  topic: string;
  total: number;
  done: number;
  percent: number;
}

interface DifficultyStat {
  difficulty: Difficulty;
  total: number;
  done: number;
  percent: number;
}

interface StreakInfo {
  current: number;
  longest: number;
}

interface RecentSession {
  date: string;
  questions: { name: string; url: string; topic: string; difficulty: Difficulty; done: boolean }[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  // summary cards
  totalQuestions = 0;
  totalDone = 0;
  totalSessions = 0;
  completionRate = 0;

  // streak
  streak: StreakInfo = { current: 0, longest: 0 };

  // 14-day activity
  dailyActivity: DayActivity[] = [];
  activityMax = 1;

  // topic breakdown
  topicStats: TopicStat[] = [];

  // difficulty breakdown
  difficultyStats: DifficultyStat[] = [];

  // heatmap (last 12 weeks)
  heatmapWeeks: { days: { date: string; count: number; level: number }[] }[] = [];

  // recent sessions
  recentSessions: RecentSession[] = [];

  // insights
  avgPerSession = 0;
  activeDaysCount = 0;
  uniqueQuestionsPracticed = 0;
  bestDay: { label: string; count: number } | null = null;
  weakestTopic: { name: string; percent: number } | null = null;
  strongestTopic: { name: string; percent: number } | null = null;
  thisWeekCount = 0;
  lastWeekCount = 0;
  weeklyTrend: 'up' | 'down' | 'same' = 'same';
  estimatedDaysLeft = 0;
  practicedToday = false;

  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    const questions = this.storage.getQuestions();
    const doneIds = new Set(this.storage.getDoneIds());
    const history = this.storage.getHistory();

    this.computeSummary(questions, doneIds, history);
    this.computeDailyActivity(history);
    this.computeTopicStats(questions, doneIds);
    this.computeDifficultyStats(questions, doneIds);
    this.computeStreak(history);
    this.computeHeatmap(history);
    this.computeRecentSessions(history, doneIds);
    this.computeInsights(questions, doneIds, history);
  }

  private computeSummary(questions: Question[], doneIds: Set<number>, history: HistoryEntry[]): void {
    this.totalQuestions = questions.length;
    this.totalDone = questions.filter(q => doneIds.has(q.id)).length;
    this.totalSessions = history.length;
    this.completionRate = this.totalQuestions > 0
      ? Math.round((this.totalDone / this.totalQuestions) * 100)
      : 0;
    const totalPicked = history.reduce((sum, h) => sum + h.questions.length, 0);
    this.avgPerSession = this.totalSessions > 0
      ? Math.round((totalPicked / this.totalSessions) * 10) / 10
      : 0;
  }

  private computeDailyActivity(history: HistoryEntry[]): void {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const countByDay = new Map<string, { picked: number; done: number }>();

    for (const entry of history) {
      const d = new Date(entry.timestamp);
      const key = this.dateKey(d);
      const existing = countByDay.get(key) ?? { picked: 0, done: 0 };
      existing.picked += entry.questions.length;
      existing.done += entry.questions.filter(q => q.done).length;
      countByDay.set(key, existing);
    }

    const today = new Date();
    this.dailyActivity = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = this.dateKey(d);
      const data = countByDay.get(key) ?? { picked: 0, done: 0 };
      this.dailyActivity.push({
        date: key,
        label: `${dayNames[d.getDay()]} ${d.getDate()}`,
        picked: data.picked,
        done: data.done
      });
    }

    this.activityMax = Math.max(1, ...this.dailyActivity.map(d => d.picked));
  }

  private computeTopicStats(questions: Question[], doneIds: Set<number>): void {
    const map = new Map<string, { total: number; done: number }>();
    for (const q of questions) {
      const entry = map.get(q.topic) ?? { total: 0, done: 0 };
      entry.total++;
      if (doneIds.has(q.id)) entry.done++;
      map.set(q.topic, entry);
    }
    this.topicStats = Array.from(map.entries())
      .map(([topic, s]) => ({
        topic,
        total: s.total,
        done: s.done,
        percent: Math.round((s.done / s.total) * 100)
      }))
      .sort((a, b) => b.total - a.total);
  }

  private computeDifficultyStats(questions: Question[], doneIds: Set<number>): void {
    const order: Difficulty[] = ['Easy', 'Medium', 'Hard'];
    const map = new Map<string, { total: number; done: number }>();
    for (const q of questions) {
      const entry = map.get(q.difficulty) ?? { total: 0, done: 0 };
      entry.total++;
      if (doneIds.has(q.id)) entry.done++;
      map.set(q.difficulty, entry);
    }
    this.difficultyStats = order
      .filter(d => map.has(d))
      .map(d => {
        const s = map.get(d)!;
        return { difficulty: d, total: s.total, done: s.done, percent: Math.round((s.done / s.total) * 100) };
      });
  }

  private computeStreak(history: HistoryEntry[]): void {
    const activeDays = new Set<string>();
    for (const entry of history) {
      activeDays.add(this.dateKey(new Date(entry.timestamp)));
    }

    // current streak – grace: if today has no activity the day isn't over yet
    let current = 0;
    const today = new Date();
    const todayKey = this.dateKey(today);
    this.practicedToday = activeDays.has(todayKey);
    const startOffset = this.practicedToday ? 0 : 1;
    for (let i = startOffset; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      if (activeDays.has(this.dateKey(d))) {
        current++;
      } else {
        break;
      }
    }

    // longest streak
    const sorted = Array.from(activeDays).sort();
    let longest = 0;
    let run = 0;
    let prev = '';
    for (const day of sorted) {
      if (prev) {
        const prevDate = new Date(prev);
        prevDate.setDate(prevDate.getDate() + 1);
        if (this.dateKey(prevDate) === day) {
          run++;
        } else {
          run = 1;
        }
      } else {
        run = 1;
      }
      longest = Math.max(longest, run);
      prev = day;
    }

    this.streak = { current, longest };
  }

  private computeHeatmap(history: HistoryEntry[]): void {
    const countByDay = new Map<string, number>();
    for (const entry of history) {
      const key = this.dateKey(new Date(entry.timestamp));
      countByDay.set(key, (countByDay.get(key) ?? 0) + entry.questions.length);
    }

    const today = new Date();
    const dayOfWeek = today.getDay();
    // go back 12 weeks + remaining days to start on Sunday
    const totalDays = 12 * 7 + dayOfWeek + 1;
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - totalDays + 1);

    const allDays: { date: string; count: number; level: number }[] = [];
    const maxCount = Math.max(1, ...Array.from(countByDay.values()));

    for (let i = 0; i < totalDays; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      const key = this.dateKey(d);
      const count = countByDay.get(key) ?? 0;
      let level = 0;
      if (count > 0) {
        const ratio = count / maxCount;
        if (ratio <= 0.25) level = 1;
        else if (ratio <= 0.5) level = 2;
        else if (ratio <= 0.75) level = 3;
        else level = 4;
      }
      allDays.push({ date: key, count, level });
    }

    // group into weeks (columns)
    this.heatmapWeeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      this.heatmapWeeks.push({ days: allDays.slice(i, i + 7) });
    }
  }

  private computeRecentSessions(history: HistoryEntry[], doneIds: Set<number>): void {
    this.recentSessions = history.slice(0, 8).map(entry => ({
      date: new Date(entry.timestamp).toLocaleString(),
      questions: entry.questions.map(q => ({
        name: this.extractName(q.url),
        url: q.url,
        topic: q.topic,
        difficulty: q.difficulty,
        done: doneIds.has(q.id)
      }))
    }));
  }

  private dateKey(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
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

  barHeight(value: number): string {
    if (value === 0) return '0';
    return Math.max(4, (value / this.activityMax) * 100) + '%';
  }

  difficultyColor(d: Difficulty): string {
    switch (d) {
      case 'Easy': return '#3fb950';
      case 'Medium': return '#d29922';
      case 'Hard': return '#f85149';
    }
  }

  private computeInsights(questions: Question[], doneIds: Set<number>, history: HistoryEntry[]): void {
    // unique questions ever practiced
    const uniqueIds = new Set<number>();
    for (const entry of history) {
      for (const q of entry.questions) uniqueIds.add(q.id);
    }
    this.uniqueQuestionsPracticed = uniqueIds.size;

    // active days
    const dayCounts = new Map<string, number>();
    for (const entry of history) {
      const key = this.dateKey(new Date(entry.timestamp));
      dayCounts.set(key, (dayCounts.get(key) ?? 0) + entry.questions.length);
    }
    this.activeDaysCount = dayCounts.size;

    // best day
    let bestKey = '';
    let bestCount = 0;
    for (const [key, count] of dayCounts) {
      if (count > bestCount) { bestCount = count; bestKey = key; }
    }
    if (bestKey) {
      const d = new Date(bestKey + 'T00:00:00');
      this.bestDay = {
        label: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        count: bestCount
      };
    }

    // weakest + strongest topic (by completion %)
    if (this.topicStats.length) {
      const sorted = [...this.topicStats].sort((a, b) => a.percent - b.percent);
      this.weakestTopic = { name: sorted[0].topic, percent: sorted[0].percent };
      this.strongestTopic = { name: sorted[sorted.length - 1].topic, percent: sorted[sorted.length - 1].percent };
    }

    // weekly trend
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfLastWeek = new Date(startOfWeek);
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);

    this.thisWeekCount = 0;
    this.lastWeekCount = 0;
    for (const entry of history) {
      const d = new Date(entry.timestamp);
      if (d >= startOfWeek) this.thisWeekCount += entry.questions.length;
      else if (d >= startOfLastWeek) this.lastWeekCount += entry.questions.length;
    }
    if (this.thisWeekCount > this.lastWeekCount) this.weeklyTrend = 'up';
    else if (this.thisWeekCount < this.lastWeekCount) this.weeklyTrend = 'down';
    else this.weeklyTrend = 'same';

    // estimated days to complete
    const remaining = this.totalQuestions - this.totalDone;
    if (remaining > 0 && this.activeDaysCount > 0) {
      const donePerDay = this.totalDone / this.activeDaysCount;
      this.estimatedDaysLeft = donePerDay > 0 ? Math.ceil(remaining / donePerDay) : 0;
    }
  }
}
