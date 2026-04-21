import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/bienvenida/bienvenida'),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login'),
    },
    {
        path: 'registro',
        loadComponent: () => import('./pages/registro/registro'),
    },
    {
        path: 'sobre-mi',
        loadComponent: () => import('./pages/sobre-mi/sobre-mi'),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error'),
    },
];