import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class PractiseService {

    employees = [
        {
            firstName: "Jack",
            department: 1,
            email: "jack@gmail.com",
            gender: "male",
            isActive: true
        },
        {
            firstName: "Hames",
            department: 2,
            email: "hames@gmail.com",
            gender: "female",
            isActive: false
        },
        {
            firstName: "Tim",
            department: 3,
            email: "tim@gmail.com",
            gender: "male",
            isActive: true
        }
    ]

    // getEmployeeList(){
    //     return this.employees;
    // }

    private initialData = new BehaviorSubject(this.employees);
    currentData = this.initialData.asObservable();

    changeData(data){
        const updatedData = [...this.initialData.value, data];
        this.initialData.next(updatedData);
    }
}