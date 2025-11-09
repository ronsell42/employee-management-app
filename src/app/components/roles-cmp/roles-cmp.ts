import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { FormsModule, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-roles-cmp',
  imports: [FormsModule],
  templateUrl: './roles-cmp.html',
  styleUrl: './roles-cmp.scss'
})
export class RolesCmp implements OnInit {

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    console.log("Fetching all roles...");
    this.http.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles').subscribe((res:any))
  }
}