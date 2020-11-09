import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { ElectricalService } from '../electrical.service';
import { ElectricalDetailsModel } from './electrical-details.model';

@Injectable()
export class ElectricalDetailsResolver implements Resolve<DataStore<ElectricalDetailsModel>> {

  constructor(private electricalService: ElectricalService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<ElectricalDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<ElectricalDetailsModel> = this.electricalService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<ElectricalDetailsModel> = this.electricalService.getDetailsStore(dataSource);

    return dataStore;
  }
}
