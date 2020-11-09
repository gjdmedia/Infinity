import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { woodService } from '../wood.service';
import { woodListingPage } from './wood-listing.page';
import { woodListingResolver } from './wood-listing.resolver';

const routes: Routes = [
  {
    path: '',
    component: woodListingPage,
    resolve: {
      data: woodListingResolver
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
    woodListingPage
  ],
  providers: [
    woodListingResolver,
    woodService
  ]
})
export class woodListingPageModule {}
