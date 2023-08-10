import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuItem } from 'src/app/models/menu';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMenuItems().subscribe((menuItems: MenuItem[]) => {
      this.menuItems = menuItems;
    });
  }


}
