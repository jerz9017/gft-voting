import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class StateService {
  isBusy: Subject<boolean>;

  constructor() {
    this.isBusy  = new Subject();
  }
}
