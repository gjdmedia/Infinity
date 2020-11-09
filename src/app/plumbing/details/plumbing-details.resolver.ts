import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { plumbingService } from '../plumbing.service';
import { plumbingDetailsModel } from './plumbing-details.model';

@Injectable()
export class plumbingDetailsResolver implements Resolve<DataStore<plumbingDetailsModel>> {

  constructor(private plumbingService: plumbingService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<plumbingDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<plumbingDetailsModel> = this.plumbingService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<plumbingDetailsModel> = this.plumbingService.getDetailsStore(dataSource);

    return dataStore;
  }
}
