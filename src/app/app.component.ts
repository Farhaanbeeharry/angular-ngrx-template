import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from './state/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-template';

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(appActions.SayHello({
      name: 'John'
    }));
  }
}
