import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BoxesService } from '../../services/boxes-service/boxes.service';
import { Observable } from 'rxjs';
import { Box } from 'src/graphql.types';
import { CommonModule } from '@angular/common';
import { BoxItemComponent } from "../box-item/box-item.component";
import { select, Store } from '@ngrx/store';
import { BoxesState } from 'src/app/state/boxes/boxes.reducer';
import { selectAllBoxes } from 'src/app/state/boxes/boxes.selectors';
import { AppState } from 'src/app/state/app.state';
import { loadBoxes } from 'src/app/state/boxes/boxes.actions';

@Component({
    selector: 'app-box-list',
    templateUrl: './box-list.component.html',
    styleUrls: ['./box-list.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, BoxItemComponent]
})
export default class BoxListComponent implements OnInit{

  constructor(private boxesService: BoxesService, private store: Store<AppState>){}
  availableBoxes$: Observable<Box[]>  = this.store.pipe(select(selectAllBoxes));

  ngOnInit(): void {
    this.store.dispatch(loadBoxes());
  }

}
