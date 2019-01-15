import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'practiseSearchTable'
})
export class PractiseSearchTablePipe implements PipeTransform {

  transform(employeeList, searchText) {
    
    if(!employeeList || !searchText) {
       return employeeList;
    }

    return employeeList.filter(employee => employee.firstName.toLowerCase().includes(searchText.toLowerCase()));
  }

}
