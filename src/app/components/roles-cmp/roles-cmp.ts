import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-roles-cmp',
  imports: [],
  templateUrl: './roles-cmp.html',
  styleUrl: './roles-cmp.scss'
})
export class RolesCmp {
  projectTitle: string = 'My Angular';
  isActive: boolean = false;
  projectVersion: number = 20;
  currentDate: Date = new Date();

  varSignal = signal('This is from a signal');

}