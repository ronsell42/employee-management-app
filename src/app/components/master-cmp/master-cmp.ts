import { Component } from '@angular/core';
import { DesignationCmp } from '../designation-cmp/designation-cmp';
import { RolesCmp } from '../roles-cmp/roles-cmp';

@Component({
  selector: 'app-master-cmp',
  imports: [DesignationCmp, RolesCmp],
  templateUrl: './master-cmp.html',
  styleUrl: './master-cmp.scss'
})
export class MasterCmp {

}
