import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, CardModule, ButtonModule],
    exports: [DashboardComponent],
    providers: [],
})
export class DashboardModule {}
