import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '@w11k/ngx-componentdestroyed';

/**
 * Component shown when the user navigates to a non existing route
 */
@Component({
    templateUrl: './exception.component.html',
    styleUrls: ['./exception.component.scss'],
})
export class ExceptionComponent implements OnInit, OnDestroy {
    exception = 'not-found';

    constructor(private activated: ActivatedRoute) {}

    ngOnInit() {
        // @ts-ignore
      this.activated.data.pipe(takeUntil(componentDestroyed(this))).subscribe(data => {
            if (data && data.exception) {
                this.exception = String(data.exception);
            }
        });
    }

    // we need this for componentDestroyed
    ngOnDestroy() {}

    toggleTemplate(exception: string): boolean {
        return this.exception === exception;
    }
}
