import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() DateValue:string="";
  @Input() DateName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
