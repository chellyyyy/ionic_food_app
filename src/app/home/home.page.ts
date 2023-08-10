import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuItem } from '../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuItems: MenuItem[] = [];

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.getMenuItems().subscribe((menuItems: MenuItem[]) => {
      this.menuItems = menuItems.filter(item => parseFloat(item.rating) >= 4.5).slice(0, 4);
    });
  }

}
