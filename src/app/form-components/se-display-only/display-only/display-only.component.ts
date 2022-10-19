import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-only',
  templateUrl: './display-only.component.html',
  styleUrls: ['./display-only.component.css']
})
export class DisplayOnlyComponent implements OnInit {

  @Input() DisplayText:string="";
  @Input() DisplayName:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
