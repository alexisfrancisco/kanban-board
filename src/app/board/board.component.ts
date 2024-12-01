import { Component } from '@angular/core';
import { Column, Task } from '../models/task.model';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, ColumnComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  columns: Column[] = [
    { name: 'To Do', tasks: [{ id: 1, title: 'Task 1', description: 'Details', status: 'todo' }] },
    { name: 'In Progress', tasks: [] },
    { name: 'Done', tasks: [] },
  ];
}
