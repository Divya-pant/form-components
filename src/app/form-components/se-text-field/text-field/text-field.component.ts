import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @Input() fieldName:string="";
  @Input() textfieldClass:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
