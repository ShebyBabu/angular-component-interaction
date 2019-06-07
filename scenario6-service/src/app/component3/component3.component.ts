import { Component, OnInit } from '@angular/core';
import { ScenarioServiceService } from '../scenario-service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
//public output="";

data : any;
  constructor(private _scenarioService: ScenarioServiceService) { }

  ngOnInit() {
    this._scenarioService.sharedData.subscribe(data =>  {
      this.data = data;
    })
  }

}
