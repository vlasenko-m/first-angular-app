import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../constants/damy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserConponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>();  //selct = output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onUserClick() {
 this.select.emit(this.id);
  }
}
