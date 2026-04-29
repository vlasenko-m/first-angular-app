import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../constants/dumy-tasks';
import { CreateTask } from './model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  getTasksForUser(userId: string) {
    return DUMMY_TASKS.filter((task) => task.userId === userId);
  }

  MarkAsComplete(taskId: string) {
    DUMMY_TASKS.splice(
      DUMMY_TASKS.findIndex((t) => t.id === taskId),
      1,
    );
  }

  CloseAddTask(task: CreateTask, userId: string) {
    DUMMY_TASKS.unshift({
      id: crypto.randomUUID(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate || new Date().toISOString().split('T')[0],
    });
  }
}
