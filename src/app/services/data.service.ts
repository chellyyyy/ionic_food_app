import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../models/menu';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private menuUrl = 'assets/menu.json';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl);
  }

  getMenuItem(id: number): Observable<MenuItem> {
    return this.http.get<MenuItem[]>(this.menuUrl).pipe(
      map((menuItems: MenuItem[]) => {
        const item = menuItems.find(item => item.id === id);
        if (!item) {
          throw new Error(`Item with id ${id} not found`);
        }
        return item;
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError('An error occurred while fetching the menu item');
      })
    );
  }
  getFastFoodItems(): Observable<MenuItem[]> {
    return this.getMenuItems().pipe(
      map((menuItems: MenuItem[]) => {
        return menuItems.filter(item => item.category === 'fastfood');
      })
    );
  }

  getSeafoodItems(): Observable<MenuItem[]> {
    return this.getMenuItems().pipe(
      map((menuItems: MenuItem[]) => {
        return menuItems.filter(item => item.category === 'seafood');
      })
    );
  }
}