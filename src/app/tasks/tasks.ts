import { Component, Input, signal } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../../constants/dumy-tasks';
import { AddTask } from './add-task/add-task';
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
  
  isAddingTask = signal(false);

  onAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  onCloseAddTask(task: CreateTask) {
    DUMMY_TASKS.unshift({
      id: crypto.randomUUID(),
      userId: this.userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate || new Date().toISOString().split('T')[0],
    });

    this.isAddingTask.set(false);
  }

  get userTasks() {
    return DUMMY_TASKS.filter((task) => task.userId === this.userId);
  }

  onMarkAsComplete(taskId: string) {
    DUMMY_TASKS.splice( DUMMY_TASKS.findIndex((t) => t.id === taskId), 1);
  }
}
