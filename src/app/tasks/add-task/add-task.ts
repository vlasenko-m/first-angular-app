import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTask } from '../model';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  @Output() addTask = new EventEmitter<CreateTask>();
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';



  onAddTask() {
    this.addTask.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDueDate});
  }

  onCancel() {
    this.cancel.emit();
  }
}
