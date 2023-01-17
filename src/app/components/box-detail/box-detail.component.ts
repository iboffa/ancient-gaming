import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box, ItemVariant } from 'src/graphql.types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { BoxComponent } from '../box/box.component';
import { BoxesService } from 'src/app/services/boxes-service/boxes.service';
import { select, Store } from '@ngrx/store';
import { selectBox } from 'src/app/state/boxes/boxes.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-box-detail',
  standalone: true,
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss'],
  imports: [CommonModule, RouterModule, BoxComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BoxDetailComponent implements OnInit {
  box$: Observable<Box | undefined> = this.store.pipe(select(selectBox(this.route.snapshot.params['id'])));
  opening: boolean = false;
  wonItem$: Observable<ItemVariant> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private boxesService: BoxesService
  ) {}

  ngOnInit(): void {
    this.box$ = this.store.pipe(select(selectBox(this.route.snapshot.params['id'])));
  }

  openBox(boxId: string) {
    this.wonItem$ = undefined;
    this.opening = true;
    this.wonItem$ = this.boxesService
      .openBox(boxId)
      .pipe(tap(() => (this.opening = false)));
  }
}
