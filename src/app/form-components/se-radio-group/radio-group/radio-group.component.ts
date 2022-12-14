import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css']
})
export class RadioGroupComponent implements OnInit {

  @Input() RadioOption:string="";
  @Input() RadioValue:string="";
  @Input() RadioName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
