import { Component, Input } from '@angular/core';
import { Column, Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { CdkDropList, DragDropModule, transferArrayItem } from '@angular/cdk/drag-drop';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, CdkDropList, DragDropModule, CardComponent],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() column!: Column;

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
