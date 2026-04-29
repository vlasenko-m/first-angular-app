import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../ui/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task!: { id: string; title: string; summary: string; dueDate: string };
  @Output() markAsComplete = new EventEmitter<string>();

  onMarkAsComplete() {
    this.markAsComplete.emit(this.task.id);
  }
}
