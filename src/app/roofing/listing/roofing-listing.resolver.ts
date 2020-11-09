import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { RoofingService } from '../roofing.service';
import { RoofingListingModel } from './roofing-listing.model';

@Injectable()
export class RoofingListingResolver implements Resolve<DataStore<RoofingListingModel>> {

  constructor(private roofingService: RoofingService) {}

  resolve(): DataStore<RoofingListingModel> {
    const dataSource: Observable<RoofingListingModel> = this.roofingService.getListingDataSource();
    const dataStore: DataStore<RoofingListingModel> = this.roofingService.getListingStore(dataSource);

    return dataStore;
  }
}
