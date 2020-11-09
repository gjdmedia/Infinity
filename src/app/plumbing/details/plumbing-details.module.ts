import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { plumbingService } from '../plumbing.service';
import { plumbingDetailsPage } from './plumbing-details.page';
import { plumbingDetailsResolver } from './plumbing-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: plumbingDetailsPage,
    resolve: {
      data: plumbingDetailsResolver
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
    plumbingDetailsPage
  ],
  providers: [
    plumbingDetailsResolver,
    plumbingService
  ]
})
export class plumbingDetailsPageModule {}
