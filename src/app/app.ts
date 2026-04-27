import { Component, signal } from '@angular/core';
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
  
  selectedUserName = signal('');
  
  users = DUMMY_USERS;

  onSelectUser(userId: string) {
    const selectedUser = this.users.find(user => user.id === userId);
    if (selectedUser) {
      this.selectedUserName.set(selectedUser.name);
    }

  }
}
