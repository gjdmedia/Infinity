import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { RoofingService } from '../roofing.service';
import { RoofingDetailsPage } from './roofing-details.page';
import { RoofingDetailsResolver } from './roofing-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: RoofingDetailsPage,
    resolve: {
      data: RoofingDetailsResolver
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
    RoofingDetailsPage
  ],
  providers: [
    RoofingDetailsResolver,
    RoofingService
  ]
})
export class RoofingDetailsPageModule {}
