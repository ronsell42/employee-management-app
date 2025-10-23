import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesCmp } from './components/roles-cmp/roles-cmp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RolesCmp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('employee-management-app');
}
