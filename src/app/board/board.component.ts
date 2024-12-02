import { Component } from '@angular/core';
import { Column, Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  columns: Column[] = [
    { name: 'To Do', tasks: [{ id: 1, title: 'Task 1', description: 'Details', status: 'to-do' },{ id: 2, title: 'Task 2', description: 'Details', status: 'to-do' }] },
    { name: 'In Progress', tasks: [{ id: 1, title: 'Task 3', description: 'Details', status: 'in-progress' }] },
    { name: 'Done', tasks: [] },
  ];

  updateStatus (task: Task, newCol: string): void {
    console.log("old status: ", task.status);
    task.status = newCol.toLowerCase().replace(' ', '-'); // converting from column name to status format
    console.log("new status: ", task.status);
  }
}
