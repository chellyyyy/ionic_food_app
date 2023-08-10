import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MenuItem } from 'src/app/models/menu';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.page.html',
  styleUrls: ['./seafood.page.scss'],
})
export class SeafoodPage implements OnInit {
  seafoodItems: MenuItem[]= [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSeafoodItems().subscribe((items: MenuItem[]) => {
      this.seafoodItems = items;
    });
  }

}