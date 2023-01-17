import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from 'src/graphql.types';
import { RouterModule } from '@angular/router';
import { BoxComponent } from "../box/box.component";

@Component({
    selector: 'app-box-item',
    templateUrl: './box-item.component.html',
    styleUrls: ['./box-item.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, BoxComponent]
})
export class BoxItemComponent {
  @Input() box!: Box;

}
