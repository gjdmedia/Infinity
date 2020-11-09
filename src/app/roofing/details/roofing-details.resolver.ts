import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { RoofingService } from '../roofing.service';
import { RoofingDetailsModel } from './roofing-details.model';

@Injectable()
export class RoofingDetailsResolver implements Resolve<DataStore<RoofingDetailsModel>> {

  constructor(private roofingService: RoofingService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<RoofingDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<RoofingDetailsModel> = this.roofingService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<RoofingDetailsModel> = this.roofingService.getDetailsStore(dataSource);

    return dataStore;
  }
}
