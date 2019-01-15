import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  searchTerm: string;
  employees: Employee[]
  //receiving single data via output property from child component in parent component
  //outputData: String;
  //receiving whole object via output property from child component in parent component
  //outputData: Employee;

  
  //Show one employee at a time and to check input change detection(Uncomment below code to see the effect)
  // displayCurrentEmployee: Employee;
  // currentEmployee = 1;

  constructor(private _employeeService: EmployeeService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    //Fetches list of employee directly.
    //this.employees = this._employeeService.getEmployees();
    //Fetches list of employee as an observable like in real world example
    this._employeeService.getEmployees().subscribe(empList => this.employees = empList);

    //Read Query params
    if(this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    }


    //Show one employee at a time and to check input change detection(Uncomment below code to see the effect)
    //this.displayCurrentEmployee = this.employees[0];
  }


  //Show one employee at a time and to check input change detection(Uncomment below code to see the effect)
  // nextEmployee(): void {
  //   if(this.currentEmployee <= 2) {
  //     this.displayCurrentEmployee = this.employees[this.currentEmployee];
  //     this.currentEmployee++;
  //   }
  //   else {
  //     this.displayCurrentEmployee = this.employees[0];
  //     this.currentEmployee = 1;
  //   }
  // }


  //Show data received via output property from child component in parent component
  // handleNotify(eventData) {
  //   this.outputData = eventData;
  // }


  viewEmployeeDetails(employeeId: number) {
    this._router.navigate(["/employees", employeeId], {
      queryParams: {'searchTerm': this.searchTerm}
    });
  }

}
