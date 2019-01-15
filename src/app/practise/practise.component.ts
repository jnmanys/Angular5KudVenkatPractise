import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import { PractiseService } from "./practise.service";


@Component({
    selector: "practise-component",
	templateUrl: "./practise.component.html",
	styleUrls: ["./practise.component.css"]
})

export class PractiseComponent implements OnInit {

    department = null;
    // gender = "male";
    // isActive = true;
    
    departments = [
        {id: 1, name:"IT"},
        {id: 2, name:"Admin"},
        {id: 3, name:"HR"}
    ];

    constructor(private _practiseService: PractiseService){}

    ngOnInit(){}

    handlePractiseFormSubmit(employeeData){
        this._practiseService.changeData(employeeData.value);
    }
}