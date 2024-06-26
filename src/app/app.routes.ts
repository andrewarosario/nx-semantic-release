import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('home').then((r) => r.homeRoutes),
  },
  {
    path: 'about',
    loadChildren: () => import('about').then((r) => r.aboutRoutes),
  },
];
