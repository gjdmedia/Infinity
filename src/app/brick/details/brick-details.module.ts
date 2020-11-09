import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { BrickService } from '../brick.service';
import { BrickDetailsPage } from './brick-details.page';
import { BrickDetailsResolver } from './brick-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: BrickDetailsPage,
    resolve: {
      data: BrickDetailsResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    BrickDetailsPage
  ],
  providers: [
    BrickDetailsResolver,
    BrickService
  ]
})
export class BrickDetailsPageModule {}
