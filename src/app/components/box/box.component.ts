import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box, ItemVariant } from 'src/graphql.types';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
    @Input() box!: Box;
    @Input() action!: 'view'|'open';

    boxOpened$: Observable<ItemVariant>|undefined;

    constructor(){}

}
