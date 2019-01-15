import { Component, OnInit } from "@angular/core";
import { PractiseService } from "./practise.service"

@Component({
    selector: "practise-table-component",
    templateUrl : "./practise-table.component.html",
    styleUrls: ["./practise-table.component.css"]
})
export class PractiseTableComponent implements OnInit {

    employeeList;

    constructor(private _practiseService: PractiseService){}

    ngOnInit(){
        //this.employeeList = this._practiseService.getEmployeeList();
        this._practiseService.currentData.subscribe(data => this.employeeList = data);
    }

}