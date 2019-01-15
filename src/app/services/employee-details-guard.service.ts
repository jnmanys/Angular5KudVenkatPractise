import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService,
        private _router: Router) { }

    // Provide implementation for canActivate() method of CanActivate interface
    // Return true if navigation is allowed, otherwise false
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //returns an object so used !! to return boolean
        const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));

        if (employeeExists) {
            return true;
        } else {
            this._router.navigate(['/notfound']);
            return false;
        }
    }
}