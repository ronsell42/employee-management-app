import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationCmp } from '../designation-cmp/designation-cmp';
import { RolesCmp } from '../roles-cmp/roles-cmp';
import { AboutComponent } from '../about-component/about-component';

@Component({
  selector: 'app-master-cmp',
  standalone: true, // ✅ Required when importing standalone components
  imports: [CommonModule, DesignationCmp, RolesCmp, AboutComponent],
  templateUrl: './master-cmp.html',
  styleUrl: './master-cmp.scss'
})
export class MasterCmp implements OnInit {
  currentComponent: string = 'roles'; // ✅ Auto-load Roles tab by default

  ngOnInit(): void {
    console.log('MasterCmp initialized, default = roles');
  }

  clickedTab(tabName: string) {
    this.currentComponent = tabName;
    console.log(`Switched to tab: ${tabName}`);
  }
}
