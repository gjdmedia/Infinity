import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { woodService } from '../wood.service';
import { woodDetailsModel } from './wood-details.model';

@Injectable()
export class woodDetailsResolver implements Resolve<DataStore<woodDetailsModel>> {

  constructor(private woodService: woodService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<woodDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<woodDetailsModel> = this.woodService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<woodDetailsModel> = this.woodService.getDetailsStore(dataSource);

    return dataStore;
  }
}
