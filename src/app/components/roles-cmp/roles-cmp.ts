import { Component, signal, Signal } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roles-cmp',
  imports: [FormsModule],
  templateUrl: './roles-cmp.html',
  styleUrl: './roles-cmp.scss'
})
export class RolesCmp {
  projectTitle: string = 'My Angularssss';
  isActive: boolean = false;
  projectVersion: number = 20;
  currentDate: Date = new Date();
  varSignal = signal('This is from a signal');
  selectedValue: string =  '';
  addedNumber: number = 0;

  // Methods
  showWelcomeAlert(){
    alert('This is a normal alert');
  }
  alertWithParameter(senderName: string){
    alert('This alert is from' + senderName);
   } 

  alertWithType(numberFromHTML: number) : number{
    this.addedNumber  = numberFromHTML + 10;
    return this.addedNumber;
  }
}