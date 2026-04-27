import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserConponent } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserConponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firts-angular-app');
}
