import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from './action';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private bus = new Subject<Action>();
  
  constructor() { }

  //Pour être en écoute, le client demande une instance vers cet élément
  bus$ = this.bus.asObservable()

  // Pour déposer, le client doit appeler cette méthode
  dispatch(action:Action):void {
    console.log(action)
    this.bus.next(action)
  }
}
