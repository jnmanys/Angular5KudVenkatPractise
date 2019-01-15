import { Injectable } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Injectable()
export class LoadingSpinnerService {
    showLoadingIndicator = true;

    constructor(private _router: Router) {}

    showSpinner() {
        this._router.events.subscribe((routerEvent: Event) => {

            if(routerEvent instanceof NavigationStart) {
                this.showLoadingIndicator = true;
            }
        
            if(routerEvent instanceof NavigationEnd || 
               routerEvent instanceof NavigationCancel || 
               routerEvent instanceof NavigationError) {
                this.showLoadingIndicator = true;
                alert('def')
            }
        });
    }
}