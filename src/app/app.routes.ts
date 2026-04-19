import { Routes } from '@angular/router';
import { QuestionPickerComponent } from './components/question-picker/question-picker.component';
import { HistoryComponent } from './components/history/history.component';
import { ExportImportComponent } from './components/export-import/export-import.component';
import { ManageComponent } from './components/manage/manage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: QuestionPickerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'data', component: ExportImportComponent },
  { path: '**', redirectTo: '' }
];
