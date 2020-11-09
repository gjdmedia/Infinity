import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { PaintingService } from '../painting.service';
import { PaintingListingModel } from './painting-listing.model';

@Injectable()
export class PaintingListingResolver implements Resolve<DataStore<PaintingListingModel>> {

  constructor(private paintingService: PaintingService) {}

  resolve(): DataStore<PaintingListingModel> {
    const dataSource: Observable<PaintingListingModel> = this.paintingService.getListingDataSource();
    const dataStore: DataStore<PaintingListingModel> = this.paintingService.getListingStore(dataSource);

    return dataStore;
  }
}
