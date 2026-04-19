import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoggerService, LogEntry } from '../../services/logger.service';
import { FilterBySourcePipe } from './filter-by-source.pipe';

interface TimelineBucket {
  label: string;
  debug: number;
  info: number;
  warn: number;
  error: number;
  total: number;
}

@Component({
  selector: 'app-log-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterBySourcePipe],
  templateUrl: './log-viewer.component.html',
  styleUrl: './log-viewer.component.css'
})
export class LogViewerComponent implements OnInit, OnDestroy {
  // filters
  searchQuery = '';
  levelFilter = '';
  sourceFilter = '';
  autoRefresh = true;

  // state
  filteredLogs: LogEntry[] = [];
  sources: string[] = [];
  timeline: TimelineBucket[] = [];
  expandedId: number | null = null;

  private refreshTimer: ReturnType<typeof setInterval> | null = null;

  constructor(public logger: LoggerService) {}

  ngOnInit(): void {
    this.refresh();
    this.refreshTimer = setInterval(() => {
      if (this.autoRefresh) this.refresh();
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer) clearInterval(this.refreshTimer);
  }

  refresh(): void {
    this.sources = [...new Set(this.logger.logs.map(l => l.source))].sort();
    this.applyFilters();
    this.buildTimeline();
  }

  applyFilters(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredLogs = this.logger.logs.filter(entry => {
      if (this.levelFilter && entry.level !== this.levelFilter) return false;
      if (this.sourceFilter && entry.source !== this.sourceFilter) return false;
      if (query) {
        const haystack = `${entry.message} ${entry.data ?? ''} ${entry.source}`.toLowerCase();
        return haystack.includes(query);
      }
      return true;
    });
  }

  buildTimeline(): void {
    const buckets = new Map<string, TimelineBucket>();
    for (const entry of this.logger.logs) {
      const d = new Date(entry.timestamp);
      const label = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      if (!buckets.has(label)) {
        buckets.set(label, { label, debug: 0, info: 0, warn: 0, error: 0, total: 0 });
      }
      const b = buckets.get(label)!;
      b.total++;
      const key = entry.level.toLowerCase() as 'debug' | 'info' | 'warn' | 'error';
      if (key in b) b[key]++;
    }
    this.timeline = Array.from(buckets.values());
  }

  get timelineMax(): number {
    return Math.max(1, ...this.timeline.map(b => b.total));
  }

  // stats
  get totalCount(): number { return this.logger.logs.length; }
  get debugCount(): number { return this.logger.logs.filter(l => l.level === 'DEBUG').length; }
  get infoCount(): number { return this.logger.logs.filter(l => l.level === 'INFO').length; }
  get warnCount(): number { return this.logger.logs.filter(l => l.level === 'WARN').length; }
  get errorCount(): number { return this.logger.logs.filter(l => l.level === 'ERROR').length; }

  toggleExpand(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  filterByLevel(level: string): void {
    this.levelFilter = this.levelFilter === level ? '' : level;
    this.applyFilters();
  }

  filterBySource(source: string): void {
    this.sourceFilter = source;
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.levelFilter = '';
    this.sourceFilter = '';
    this.applyFilters();
  }

  download(): void {
    this.logger.downloadLogs();
  }

  clear(): void {
    if (confirm('Clear all logs?')) {
      this.logger.clearLogs();
      this.refresh();
    }
  }

  barHeight(bucket: TimelineBucket, level: string): string {
    const val = bucket[level as keyof TimelineBucket] as number;
    return ((val / this.timelineMax) * 100) + '%';
  }

  trackById(_: number, entry: LogEntry): number {
    return entry.id;
  }

  trackByLabel(_: number, bucket: TimelineBucket): string {
    return bucket.label;
  }
}
