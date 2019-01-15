import { Employee } from './../models/employee.model';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;

  constructor(private _route: ActivatedRoute,
              private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    //Snapshot approach to read route parameter
    // const id = +this._route.snapshot.paramMap.get('id');
    // this.employee = this._employeeService.getEmployee(id);

    //Subscribe to route params to read route parameter and react if any route parameter changes
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this._employeeService.getEmployee(this._id);
    })
  }

  //Subscribe to route params to read route parameter and react if any route parameter changes
  viewNextEmployeeDetails(){
    if(this._id < 3)
      this._id++
    else
      this._id = 1;

    this._router.navigate(["/employees", this._id]);
  }

}
