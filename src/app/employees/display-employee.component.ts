import { ActivatedRoute } from '@angular/router';
import { Employee } from './../models/employee.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  //To hightlight visited employee details
  private viewedEmployeeDetailsId: number;

  @Input() employee: Employee;
  //Pass single data from child to parent component
  //@Output() notify: EventEmitter<String> = new EventEmitter<String>();
  //Pass whole "employee" object from child to parent component via output property
  //@Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {

    //To hightlight visited employee details
    this.viewedEmployeeDetailsId = +this._route.snapshot.paramMap.get('id');
  }

  //Input change detection way
  ngOnChanges(changes: SimpleChanges) {
    // (Uncomment below code to see the effect)

    // console.log(changes);
    
    // const previousEmployee = <Employee>changes.employee.previousValue; //<Employee> to type cast
    // const currentEmployee = <Employee>changes.employee.currentValue;

    // console.log("Previous Employee:" + (previousEmployee? previousEmployee.name : 'Null'));
    // console.log("Current Employee:" + currentEmployee.name);
  }

  
  //passing data from child to parent component via output property
  // handleClick() {
  //   While passing single data from child to parent component via output property
  //   this.notify.emit(this.employee.name);
  //   While passing whole "employee" object from child to parent component via output property
  //   this.notify.emit(this.employee);
  // }


  // Template reference variable to call child components method and properties/pass data from child to parent component
  // getNameAndGender() {
  //   return this.employee.name + " " + this.employee.gender;
  // }
}
