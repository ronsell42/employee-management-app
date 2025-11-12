import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesCmp } from './components/roles-cmp/roles-cmp';
import { MasterCmp } from './components/master-cmp/master-cmp';
import { AboutComponent } from './components/about-component/about-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterCmp, RolesCmp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('employee-management-app');
}
