import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css']
})
export class NumberFieldComponent implements OnInit {

  @Input() NumberFieldName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
