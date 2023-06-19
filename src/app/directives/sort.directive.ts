import { Directive , Input ,ElementRef,Renderer2, HostListener } from '@angular/core';
import { Sort } from 'src/util/sort';
import { IEmployee } from '../models/employee.model';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort!:Array<IEmployee>;
  constructor(private renderer:Renderer2 , private targetElem:ElementRef) { }

  @HostListener("click")
  sortData(){

    // Create Object of sort class
    const sort:any = new Sort();

    // Get Reference of current clicked element
    const elem = this.targetElem.nativeElement;

    // Get In which order list should be sorted by default it would be set to desc on element attribute
    const order = elem.getAttribute("data-order");

    // get the property type specialy set[data-type=data] if it is date field
    const type = elem.getAttribute("data-type");

    // get property name from element attribute
    const property = elem.getAttribute("data-name");

    if(order==="desc"){
      this.appSort.sort(sort.startSort(property,order,type));
      elem.setAttribute("data-order","asc")
    } else{
      this.appSort.sort(sort.startSort(property,order,type));
      elem.setAttribute("data-order","desc")
    }

  }
}
