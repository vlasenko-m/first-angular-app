import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserConponent } from './user/user';
import { DUMMY_USERS } from '../constants/damy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserConponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firts-angular-app');
  users = DUMMY_USERS;

  selectedUserId = signal('');

  selectedUser = computed(() => this.users.find((user) => user.id === this.selectedUserId()));
  selectedUserName = computed(() => this.selectedUser()?.name ?? '');

  onSelectUser(userId: string) {
    this.selectedUserId.set(userId);
  }
}
