import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { PaintingService } from '../painting.service';
import { PaintingDetailsPage } from './painting-details.page';
import { PaintingDetailsResolver } from './painting-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: PaintingDetailsPage,
    resolve: {
      data: PaintingDetailsResolver
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
    PaintingDetailsPage
  ],
  providers: [
    PaintingDetailsResolver,
    PaintingService
  ]
})
export class PaintingDetailsPageModule {}
