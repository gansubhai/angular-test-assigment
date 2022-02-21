import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  firstName="";
  lastName="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitGoBackToParent(){
    console.log('firstName',this.firstName);
    console.log('lastName',this.lastName);
  }

}
