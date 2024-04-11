import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { adminService } from 'src/app/admin/admin.service.service';
import { ApiService } from 'src/app/api.service';
import { Service } from 'src/app/types/service-post';

@Component({
  selector: 'app-selected-service',
  templateUrl: './selected-service.component.html',
  styleUrls: ['./selected-service.component.scss']
})
export class SelectedServiceComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private adminService: adminService,
    private activeRoute: ActivatedRoute
  ) { }
  service = {} as Service;
  serviceImg: string = this.service.img

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      // console.log(data);

      const id = data['serviceId'];
      this.apiService.getService(id).subscribe((services) => {
        this.service = services;
        console.log(this.serviceImg);
      });
    });
  }

  get isLoggedIn(): boolean {
    return this.adminService.isLogged;
  }
}
