import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionComponent } from './exception.component';
import { CardModule } from 'primeng/card';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExceptionComponent', () => {
    let component: ExceptionComponent;
    let fixture: ComponentFixture<ExceptionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExceptionComponent],
            imports: [CardModule, RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExceptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
