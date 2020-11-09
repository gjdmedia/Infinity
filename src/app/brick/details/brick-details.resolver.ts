import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { BrickService } from '../brick.service';
import { BrickDetailsModel } from './brick-details.model';

@Injectable()
export class BrickDetailsResolver implements Resolve<DataStore<BrickDetailsModel>> {

  constructor(private brickService: BrickService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<BrickDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<BrickDetailsModel> = this.brickService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<BrickDetailsModel> = this.brickService.getDetailsStore(dataSource);

    return dataStore;
  }
}
