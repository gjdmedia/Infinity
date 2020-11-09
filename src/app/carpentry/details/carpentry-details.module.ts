import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { CarpentryService } from '../carpentry.service';
import { CarpentryDetailsPage } from './carpentry-details.page';
import { CarpentryDetailsResolver } from './carpentry-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: CarpentryDetailsPage,
    resolve: {
      data: CarpentryDetailsResolver
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
    CarpentryDetailsPage
  ],
  providers: [
    CarpentryDetailsResolver,
    CarpentryService
  ]
})
export class CarpentryDetailsPageModule {}
