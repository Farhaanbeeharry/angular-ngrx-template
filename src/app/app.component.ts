import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appActions from './store/actions/app.actions';
import { selectTestHttp } from './store/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public data$ = this.store.select(selectTestHttp);

  constructor(private store: Store) {
    this.data$.subscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(appActions.testHttp());
  }
  
  test(): void {
    console.log(this.data$);
  }
}
