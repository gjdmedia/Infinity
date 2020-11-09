import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { PaintingService } from '../painting.service';
import { PaintingListingPage } from './painting-listing.page';
import { PaintingListingResolver } from './painting-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: PaintingListingPage,
    resolve: {
      data: PaintingListingResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    HttpClientModule
  ],
  declarations: [
    PaintingListingPage
  ],
  providers: [
    PaintingListingResolver,
    PaintingService
  ]
})
export class PaintingListingPageModule {}
