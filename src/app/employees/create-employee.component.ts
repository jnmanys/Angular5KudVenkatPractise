import { Department } from './../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from './../services/employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //Select radio, checkbox, select dropdown by default and set preview button text
  // gender='male'
  // isActive=true
  department = null
  previewPhoto = false;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ]

  //To create CanDeactivate route process, @ViewChild is used to access ngForm in the component.
  //"createEmployeeForm" is the variable name by which we can access "employeeForm" in other component and so is defined public.
  //We can then use it to check if "employeeForm" is dirty or any other property and its type is "NgForm".
  @ViewChild('employeeForm')  public createEmployeeForm: NgForm;

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    //To reset form via script
    //this.createEmployeeForm.reset();
    //To reset form via script
    //empForm.reset();
    //To reset form via script and set default values to inputs
    // empForm.reset({
    //   name:'abc',
    //   email:'abc@gmail.com'
    // });

    this._employeeService.createEmployee(empForm);
    empForm.reset();
    this._router.navigate(['list']);
  }

}
