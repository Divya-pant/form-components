import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  @Input() switchOption1:string="";
  @Input() switchOption2:string="";
  btnstateyes:boolean =false;
  btnstateno:boolean =false;
  disableno(){
    this.btnstateno=true;
    this.btnstateyes=false;
  }
  disableyes(){
    this.btnstateyes=true;
    this.btnstateno=false;
  }

  ngOnInit(): void {
  }

}
