import { Component, OnInit } from '@angular/core';
import { ScenarioServiceService } from '../scenario-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

 // public data="";

  constructor(private _scenarioService: ScenarioServiceService) { }

  onClick(value)
  {
    this._scenarioService.sharedData.next(value);
    // this.data=value;
    // this._scenarioService.setIntoService(this.data);
  }
  
  ngOnInit() {
  
  }

  

  




}
