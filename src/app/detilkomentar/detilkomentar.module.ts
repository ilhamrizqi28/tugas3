import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetilkomentarPage } from './detilkomentar.page';

const routes: Routes = [
  {
    path: '',
    component: DetilkomentarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetilkomentarPage]
})
export class DetilkomentarPageModule {}
