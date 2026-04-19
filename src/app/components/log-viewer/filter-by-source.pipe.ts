import { Pipe, PipeTransform } from '@angular/core';
import { LogEntry } from '../../services/logger.service';

@Pipe({ name: 'filterBySource', standalone: true })
export class FilterBySourcePipe implements PipeTransform {
  transform(logs: ReadonlyArray<LogEntry>, source: string): LogEntry[] {
    return logs.filter(l => l.source === source);
  }
}
