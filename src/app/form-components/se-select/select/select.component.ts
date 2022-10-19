import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() options:string="";
  @Input() optionclass:string="";
  @Input() optionvalue:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
