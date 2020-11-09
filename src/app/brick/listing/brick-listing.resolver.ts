import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { BrickService } from '../brick.service';
import { BrickListingModel } from './brick-listing.model';

@Injectable()
export class BrickListingResolver implements Resolve<DataStore<BrickListingModel>> {

  constructor(private brickService: BrickService) {}

  resolve(): DataStore<BrickListingModel> {
    const dataSource: Observable<BrickListingModel> = this.brickService.getListingDataSource();
    const dataStore: DataStore<BrickListingModel> = this.brickService.getListingStore(dataSource);

    return dataStore;
  }
}
