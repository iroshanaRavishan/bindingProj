import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "";
  public greeting = "";
  constructor() { }

 
  public clickEvent(value:string){
    this.name = value;
  }
  ngOnInit(): void {
  }

  onClick(value:string){
    this.greeting = "welcome "+value + "...!!!";
  }
}
