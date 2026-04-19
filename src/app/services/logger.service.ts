import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
export { LogLevel } from '../models/log-level';
import { LogLevel } from '../models/log-level';

export interface LogEntry {
  id: number;
  timestamp: string;
  level: string;
  source: string;
  message: string;
  data?: string;
}

@Injectable({ providedIn: 'root' })
export class LoggerService {
  private level: LogLevel;
  private buffer: LogEntry[] = [];
  private idCounter = 0;
  private readonly MAX_BUFFER = 1000;

  constructor() {
    this.level = environment.logLevel ?? (environment.production ? LogLevel.WARN : LogLevel.DEBUG);
    this.addEntry('INFO', 'LoggerService', `Logger initialized (level=${LogLevel[this.level]}, production=${environment.production})`, []);
  }

  get logs(): ReadonlyArray<LogEntry> {
    return this.buffer;
  }

  clearLogs(): void {
    this.buffer = [];
  }

  downloadLogs(): void {
    const content = this.buffer
      .map(e => `${e.timestamp} [${e.level}] [${e.source}] ${e.message}${e.data ? ' | ' + e.data : ''}`)
      .join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `app-logs-${new Date().toISOString().slice(0, 19).replace(/:/g, '-')}.log`;
    a.click();
    URL.revokeObjectURL(url);
  }

  debug(message: string, ...args: unknown[]): void;
  debug(source: string, message: string, ...args: unknown[]): void;
  debug(...params: unknown[]): void {
    const { source, message, args } = this.parseParams(params);
    this.addEntry('DEBUG', source, message, args);
    if (this.level <= LogLevel.DEBUG) {
      console.log(`[DEBUG] [${source}] ${message}`, ...args);
    }
  }

  info(message: string, ...args: unknown[]): void;
  info(source: string, message: string, ...args: unknown[]): void;
  info(...params: unknown[]): void {
    const { source, message, args } = this.parseParams(params);
    this.addEntry('INFO', source, message, args);
    if (this.level <= LogLevel.INFO) {
      console.info(`[INFO] [${source}] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: unknown[]): void;
  warn(source: string, message: string, ...args: unknown[]): void;
  warn(...params: unknown[]): void {
    const { source, message, args } = this.parseParams(params);
    this.addEntry('WARN', source, message, args);
    if (this.level <= LogLevel.WARN) {
      console.warn(`[WARN] [${source}] ${message}`, ...args);
    }
  }

  error(message: string, ...args: unknown[]): void;
  error(source: string, message: string, ...args: unknown[]): void;
  error(...params: unknown[]): void {
    const { source, message, args } = this.parseParams(params);
    this.addEntry('ERROR', source, message, args);
    if (this.level <= LogLevel.ERROR) {
      console.error(`[ERROR] [${source}] ${message}`, ...args);
    }
  }

  /** If first two params are strings, treat as (source, message, ...args). Otherwise (message, ...args). */
  private parseParams(params: unknown[]): { source: string; message: string; args: unknown[] } {
    if (params.length >= 2 && typeof params[0] === 'string' && typeof params[1] === 'string') {
      return { source: params[0], message: params[1], args: params.slice(2) };
    }
    return { source: 'App', message: String(params[0] ?? ''), args: params.slice(1) };
  }

  private addEntry(level: string, source: string, message: string, args: unknown[]): void {
    const entry: LogEntry = {
      id: ++this.idCounter,
      timestamp: new Date().toISOString(),
      level,
      source,
      message
    };
    if (args.length) {
      try {
        entry.data = JSON.stringify(args.length === 1 ? args[0] : args);
      } catch {
        entry.data = String(args);
      }
    }
    this.buffer.push(entry);
    if (this.buffer.length > this.MAX_BUFFER) {
      this.buffer.shift();
    }
  }
}
