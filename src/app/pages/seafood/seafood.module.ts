import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeafoodPageRoutingModule } from './seafood-routing.module';

import { SeafoodPage } from './seafood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeafoodPageRoutingModule
  ],
  declarations: [SeafoodPage]
})
export class SeafoodPageModule {}
