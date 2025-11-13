import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { CommonModule } from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-roles-cmp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles-cmp.html',
  styleUrl: './roles-cmp.scss'
})
export class RolesCmp implements OnInit {
  cdr = inject(ChangeDetectorRef);
  
  roleList: any[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {

    this.getAllRoles();
    this.cdr.detectChanges(); //after the data is fetched
  }

  getAllRoles() {
    this.http.get<any>('/api/ClientStrive/GetAllRoles')
      .pipe(delay(1000))
      .subscribe({
        next: (res) => {
          this.roleList = res.data || [];
          console.log('Roles loaded:', this.roleList);
        },
        error: (err) => {
          console.error('Error fetching roles:', err);
        }
      });
  }

  /** Retry if the list is empty */
  retryFetch(): boolean {
    if (this.roleList.length === 0) {
      console.log('Retrying roles fetch...');
      setTimeout(() => this.getAllRoles(), 2000); // retry after 2 seconds
    }
    return true; // needed to satisfy template syntax
  }
}
