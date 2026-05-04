import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { AddTask } from './add-task/add-task';
import { TaskService } from './task.service';
import { CreateTask } from './model';

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() userId!: string;
  @Input({ required: true }) name!: string;

  constructor(private taskService: TaskService) {}

  isAddingTask = signal(false);

  onOpenAddTaskModal() {
    this.isAddingTask.set(true);
  }

  onCloseAddTaskModal() {
    this.isAddingTask.set(false);
  }

  get userTasks() {
    return this.taskService.getTasksForUser(this.userId);
  }


}
