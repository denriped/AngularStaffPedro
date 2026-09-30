import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
  path: 'tasks',
  loadComponent: () =>
    import('./pages/task-list/task-list')
      .then(m => m.TaskList)
  },
  {
    path: 'tasks/new',
    loadComponent: () =>
      import('./pages/task-form/task-form')
        .then(m => m.TaskForm)
  },
  {
  path: 'tasks/:id',
  loadComponent: () =>
    import('./pages/task-detail/task-detail')
      .then(m => m.TaskDetail)
  },
  {
    path: 'tasks/:id/edit',
    loadComponent: () =>
      import('./pages/task-form/task-form')
        .then(m => m.TaskForm)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found')
        .then(m => m.NotFound)
  }
];

