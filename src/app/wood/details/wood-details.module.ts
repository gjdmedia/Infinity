import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { woodService } from '../wood.service';
import { woodDetailsPage } from './wood-details.page';
import { woodDetailsResolver } from './wood-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: woodDetailsPage,
    resolve: {
      data: woodDetailsResolver
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
    woodDetailsPage
  ],
  providers: [
    woodDetailsResolver,
    woodService
  ]
})
export class woodDetailsPageModule {}
