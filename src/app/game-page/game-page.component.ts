import { Component, OnInit } from '@angular/core';
import { TestWebService } from '../test-web.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  average:number=0;
  occuranceOfMaxNumber:number=0;
  max:number=0;
  min:number=0;
  arrOfNumber:number[]=[];
  arrVar:number[] = [5, 5, 5, 2, 2, 2, 2, 2, 9,9,9,9,9,9, 4];
  constructor(private testWebService:TestWebService) { }

  ngOnInit(): void {
   
  }

  getMax(arr:number[]){
    
  }
  getMin(arr:number[]){
   
  }
  getAverage(arr:number[]){
   
  }
  getOccuranceofMaxNumber(){
    
  }

  refeshContent(){
   

  }

}
