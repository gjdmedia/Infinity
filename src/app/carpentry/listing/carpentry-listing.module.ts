import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CarpentryService } from '../carpentry.service';
import { CarpentryListingPage } from './carpentry-listing.page';
import { CarpentryListingResolver } from './carpentry-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: CarpentryListingPage,
    resolve: {
      data: CarpentryListingResolver
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
    CarpentryListingPage
  ],
  providers: [
    CarpentryListingResolver,
    CarpentryService
  ]
})
export class CarpentryListingPageModule {}
