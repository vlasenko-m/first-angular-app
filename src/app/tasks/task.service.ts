import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../constants/dumy-tasks';
import { CreateTask } from './model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (!tasks) return;

    try {
      const parsedTasks: unknown = JSON.parse(tasks);

      if (Array.isArray(parsedTasks)) {
        DUMMY_TASKS.length = 0;
        DUMMY_TASKS.push(...parsedTasks);
      }
    } catch {
      // Ignore corrupted localStorage data and keep initial dummy tasks.
    }
  }
  getTasksForUser(userId: string) {
    return DUMMY_TASKS.filter((task) => task.userId === userId);
  }

  MarkAsComplete(taskId: string) {
    DUMMY_TASKS.splice(
      DUMMY_TASKS.findIndex((t) => t.id === taskId),
      1,
    );
    this.saveTasks();
  }

  CloseAddTask(task: CreateTask, userId: string) {
    DUMMY_TASKS.unshift({
      id: crypto.randomUUID(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate || new Date().toISOString().split('T')[0],
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(DUMMY_TASKS));
  }
}
