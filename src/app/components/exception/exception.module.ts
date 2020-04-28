import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExceptionComponent } from './exception.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ExceptionComponent],
    exports: [ExceptionComponent],
})
export class ExceptionModule {}
