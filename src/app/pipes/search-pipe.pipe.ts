import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../models/employee.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(values: IEmployee[], searchText: string): any {
    if (!searchText ) {
      return values; // No filter text provided, return all names
    }

    if (values && values.length){
      return values.filter((value:IEmployee) => {
        const namesMatch = value.name.toLowerCase().includes(searchText.toLowerCase());
        const companyMatch = value.company.name.toLowerCase().includes(searchText.toLowerCase());
        const designationMatch= value.company.designation.toLowerCase().includes(searchText)

        return namesMatch||companyMatch||designationMatch
      })
    }


  }

}
