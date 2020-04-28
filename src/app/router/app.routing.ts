import { Routes } from '@angular/router';
import { DashboardComponent } from '../main-modules/dashboard/dashboard.component';
import { AppLayoutComponent } from '../layout/app-layout/app-layout.component';
import { ExceptionComponent } from '../components/exception';


export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }
        ],
    },
    {
        path: 'restricted',
        component: ExceptionComponent,
        data: { exception: 'restricted' },
    },
    {
        path: '**',
        component: ExceptionComponent,
        data: { exception: 'not-found' },
    },
];
