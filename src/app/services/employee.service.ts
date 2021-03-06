import { Employee } from './../models/employee.model';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Mark',
          gender: 'Male',
          contactPreference: 'Email',
          email: 'mark@pragimtech.com',
          dateOfBirth: new Date('10/25/1988'),
          department: 1,
          isActive: true,
          photoPath: '../../assets/images/mark.png'
        },
        {
          id: 2,
          name: 'Mary',
          gender: 'Female',
          contactPreference: 'Phone',
          phoneNumber: 2345978640,
          dateOfBirth: new Date('11/20/1979'),
          department: 2,
          isActive: true,
          photoPath: '../../assets/images/mary.png'
        },
        {
          id: 3,
          name: 'John',
          gender: 'Male',
          contactPreference: 'Phone',
          phoneNumber: 5432978640,
          dateOfBirth: new Date('3/25/1976'),
          department: 3,
          isActive: false,
          photoPath: '../../assets/images/john.png'
        }
    ]

    //Returns list of employee directly.
    // getEmployees(): Employee[] {
    //     return this.listEmployees;
    // }
    //Returns list of employee as an observable like in real world example
    getEmployees(): Observable<Employee[]> {
        return of(this.listEmployees);
    }

    getEmployee(employeeId: number) {
        return this.listEmployees.find(employee => employee.id === employeeId);
    }

    createEmployee(employee) {
        this.listEmployees.push(employee.value);
    }
}