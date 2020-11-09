import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { BrickService } from '../brick.service';
import { BrickListingPage } from './brick-listing.page';
import { BrickListingResolver } from './brick-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: BrickListingPage,
    resolve: {
      data: BrickListingResolver
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
    BrickListingPage
  ],
  providers: [
    BrickListingResolver,
    BrickService
  ]
})
export class BrickListingPageModule {}
