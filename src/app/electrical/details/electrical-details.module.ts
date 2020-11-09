import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { ElectricalService } from '../electrical.service';
import { ElectricalDetailsPage } from './electrical-details.page';
import { ElectricalDetailsResolver } from './electrical-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ElectricalDetailsPage,
    resolve: {
      data: ElectricalDetailsResolver
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
    ElectricalDetailsPage
  ],
  providers: [
    ElectricalDetailsResolver,
    ElectricalService
  ]
})
export class ElectricalDetailsPageModule {}
