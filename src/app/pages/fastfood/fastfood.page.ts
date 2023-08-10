import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuItem } from 'src/app/models/menu';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.page.html',
  styleUrls: ['./fastfood.page.scss'],
})
export class FastfoodPage implements OnInit {
  fastFoodItems: MenuItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getFastFoodItems().subscribe((items: MenuItem[]) => {
      this.fastFoodItems = items;
    });
  }

}
