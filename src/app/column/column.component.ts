import { Component, Input, Output, EventEmitter } from '@angular/core';
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
      if (this.column.name === "To Do") {
        event.container.data[event.currentIndex].status = "to-do";
      }
      else if (this.column.name === "In Progress") {
        event.container.data[event.currentIndex].status = "in-progress";
      }
      else if (this.column.name === "Done") {
        event.container.data[event.currentIndex].status = "done";
      }
      // console.log("hi", event.container.data[event.currentIndex].status);
      console.log("new-status", this.column.name)
      // event.container.data[event.currentIndex].status = "test"; //updates status
    }
  }
}
