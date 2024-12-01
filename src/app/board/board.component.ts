import { Component } from '@angular/core';
import { Column, Task } from '../models/task.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  columns: Column[] = [
    { name: 'To Do', tasks: [{ id: 1, title: 'Task 1', description: 'Task details', status: 'todo' }] },
    { name: 'In Progress', tasks: [] },
    { name: 'Done', tasks: [] }
  ];
}
