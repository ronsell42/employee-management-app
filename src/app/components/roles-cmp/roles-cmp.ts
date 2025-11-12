import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-roles-cmp',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles-cmp.html',
  styleUrl: './roles-cmp.scss'
})
export class RolesCmp implements OnInit {

  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
  console.log("Fetching all roles...");
  this.http.get('/api/ClientStrive/GetAllRoles').subscribe({
  next: (res: any) => {
    this.roleList = res.data;
    console.log("Roles fetched successfully:", res);
  },
  error: (err) => {
    console.error("Error fetching roles:", err);
  }
});
}
}