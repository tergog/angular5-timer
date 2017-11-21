import {Component, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy {

  /**
   * Default constructor
   */
  constructor() {}

  /**
   * Timer
   */
  timer = Observable.interval(1000);

  /**
   * Current time
   */
  time = new Date().setHours(0,0,0);

  /**
   * Timer Subscription
   */
  timerSubscription: Subscription;

  /**
   * Start timer
   */
  onStartClick = () => this.timerSubscription = this.timer.subscribe(() => this.time += 1000);

  /**
   * Stop timer
   */
  onStopClick = () => this.timerSubscription.unsubscribe();

  /**
   * Reset timer
   */
  onResetClick = () => {
    this.timerSubscription.unsubscribe();
    this.time = new Date().setHours(0,0,0);
  };

  /**
   * On component destroy hook
   */
  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}
