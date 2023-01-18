import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from 'src/graphql.types';
import { CommonModule } from '@angular/common';
import { BoxItemComponent } from '../box-item/box-item.component';
import { select, Store } from '@ngrx/store';
import { selectAllBoxes } from 'src/app/state/boxes/boxes.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BoxItemComponent],
})
export default class BoxListComponent {
  availableBoxes$: Observable<Box[]> = this.store.pipe(select(selectAllBoxes));

  constructor(private store: Store<AppState>) {}

  trackBox(index: number, box: Box){
    return box.id;
  }
}
