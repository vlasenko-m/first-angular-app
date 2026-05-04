import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<void>();
  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onAddTask() {
    this.taskService.CloseAddTask({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate}, this.userId);
    this.onCancel();
  }

  onCancel() {
    this.cancel.emit();
  }
}
