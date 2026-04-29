import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Card } from '../../ui/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task!: { id: string; title: string; summary: string; dueDate: string };

  private taskService = inject(TaskService);

  onMarkAsComplete() {
    this.taskService.MarkAsComplete(this.task.id);
  }
}
