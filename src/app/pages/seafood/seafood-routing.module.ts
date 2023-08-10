import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeafoodPage } from './seafood.page';

const routes: Routes = [
  {
    path: '',
    component: SeafoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeafoodPageRoutingModule {}
