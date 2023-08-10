import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { MenuItem } from '../../models/menu';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  menuItem: MenuItem = {} as MenuItem;;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      const id = +itemId;
      this.dataService.getMenuItem(id).subscribe((menuItem: MenuItem) => {
        this.menuItem = menuItem;
      });
    }
  }


}
