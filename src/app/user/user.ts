import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../../constants/damy-users';
import { Card } from '../ui/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserConponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input() selected!: boolean;

  @Output() select = new EventEmitter<string>();  //selct = output<string>();

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onUserClick() {
 this.select.emit(this.id);
  }
}
