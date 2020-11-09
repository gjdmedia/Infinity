import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { CarpentryService } from '../carpentry.service';
import { CarpentryDetailsModel } from './carpentry-details.model';

@Injectable()
export class CarpentryDetailsResolver implements Resolve<DataStore<CarpentryDetailsModel>> {

  constructor(private carpentryService: CarpentryService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<CarpentryDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<CarpentryDetailsModel> = this.carpentryService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<CarpentryDetailsModel> = this.carpentryService.getDetailsStore(dataSource);

    return dataStore;
  }
}
