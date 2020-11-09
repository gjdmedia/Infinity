import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ElectricalService } from '../electrical.service';
import { ElectricalListingPage } from './electrical-listing.page';
import { ElectricalListingResolver } from './electrical-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: ElectricalListingPage,
    resolve: {
      data: ElectricalListingResolver
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
    ElectricalListingPage
  ],
  providers: [
    ElectricalListingResolver,
    ElectricalService
  ]
})
export class ElectricalListingPageModule {}
