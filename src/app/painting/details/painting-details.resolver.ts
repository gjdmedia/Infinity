import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { PaintingService } from '../painting.service';
import { PaintingDetailsModel } from './painting-details.model';

@Injectable()
export class PaintingDetailsResolver implements Resolve<DataStore<PaintingDetailsModel>> {

  constructor(private paintingService: PaintingService) {}

  resolve(route: ActivatedRouteSnapshot): DataStore<PaintingDetailsModel> {
    const itemSlug = route.paramMap.get('productId');

    const dataSource: Observable<PaintingDetailsModel> = this.paintingService.getDetailsDataSource(itemSlug);
    const dataStore: DataStore<PaintingDetailsModel> = this.paintingService.getDetailsStore(dataSource);

    return dataStore;
  }
}
