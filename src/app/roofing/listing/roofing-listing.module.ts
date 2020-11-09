import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { RoofingService } from '../roofing.service';
import { RoofingListingPage } from './roofing-listing.page';
import { RoofingListingResolver } from './roofing-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: RoofingListingPage,
    resolve: {
      data: RoofingListingResolver
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
    RoofingListingPage
  ],
  providers: [
    RoofingListingResolver,
    RoofingService
  ]
})
export class RoofingListingPageModule {}
