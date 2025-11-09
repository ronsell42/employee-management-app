import { Component } from '@angular/core';
import { DesignationCmp } from '../designation-cmp/designation-cmp';
import { RolesCmp } from '../roles-cmp/roles-cmp';
import { AboutComponent } from "../about-component/about-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master-cmp',
  imports: [DesignationCmp, RolesCmp, AboutComponent, CommonModule],
  templateUrl: './master-cmp.html',
  styleUrl: './master-cmp.scss'
})
export class MasterCmp {
  currentComponent: string = 'roles'; // or 'designation' based on your logic

  clickedTab(tabName: string) {
    this.currentComponent = tabName;
    // console.log(this.currentComponent);
  }
}
