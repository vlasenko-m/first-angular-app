import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../constants/damy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserConponent {
  selectidUser = signal(this.getRandomUser());
  imagePath = computed(() => `assets/users/${this.selectidUser().avatar}`);


  onUserClick() {
    this.selectidUser.set(this.getRandomUser());
  }

  private getRandomUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    return DUMMY_USERS[randomIndex];
  }
}
