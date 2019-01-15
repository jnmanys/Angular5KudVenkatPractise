import { CreateEmployeeComponent } from '../employees/create-employee.component';
import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

    canDeactivate(component: CreateEmployeeComponent): boolean {
        if(component.createEmployeeForm.dirty) {
            return confirm("Are you sure you want to navigate to next page?");
        }

        return true;
    }
}