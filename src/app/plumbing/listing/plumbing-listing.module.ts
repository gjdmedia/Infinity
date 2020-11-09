import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { plumbingService } from '../plumbing.service';
import { plumbingListingPage } from './plumbing-listing.page';
import { plumbingListingResolver } from './plumbing-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: plumbingListingPage,
    resolve: {
      data: plumbingListingResolver
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
    plumbingListingPage
  ],
  providers: [
    plumbingListingResolver,
    plumbingService
  ]
})
export class plumbingListingPageModule {}
