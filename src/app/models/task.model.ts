export interface Task {
  id: number;
  title: string;
  description: string;
  status: string; // e.g., 'todo', 'in-progress', 'done'
}

export interface Column {
  name: string;
  tasks: Task[];
}
