import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Portfolio
  },
  {
    path: 'admin',
    component: AdminDashboard
  }
];