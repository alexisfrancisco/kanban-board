import { Component, input, Input } from '@angular/core';
import { Column, Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDragDrop, DragDropModule, CdkDrag, transferArrayItem, moveItemInArray, } from '@angular/cdk/drag-drop';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag, DragDropModule, CardComponent],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() column!: Column;
  @Input() updateStatus!: (task: Task, newCol: string) => void  // Input for the updateStatus function

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task = event.container.data[event.currentIndex];
      const newCol = this.column.name;

      this.updateStatus(task, newCol);
    }
  }
}
