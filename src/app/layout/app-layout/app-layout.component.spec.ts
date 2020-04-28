import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppLayoutComponent} from './app-layout.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AppLayoutComponent', () => {
    let component: AppLayoutComponent;
    let fixture: ComponentFixture<AppLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppLayoutComponent,
            ],
            imports: [
                CommonModule,
                RouterTestingModule,
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            providers: [
            ],
        }).compileComponents();
    }));


    beforeEach(() => {
        fixture = TestBed.createComponent(AppLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        fixture.detectChanges();
    });

    it('should prevent default', () => {
        const event = new MouseEvent('click');
        const spyOnPreventDefault = spyOn(event, 'preventDefault');
        expect(spyOnPreventDefault).toHaveBeenCalled();
    });
});
