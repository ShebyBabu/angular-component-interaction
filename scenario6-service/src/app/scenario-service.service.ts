import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScenarioServiceService {
public serviceValue="";
  constructor() { }

sharedData:any = new Subject();




}
