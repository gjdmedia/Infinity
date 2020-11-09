import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { plumbingService } from '../plumbing.service';
import { plumbingListingModel } from './plumbing-listing.model';

@Injectable()
export class plumbingListingResolver implements Resolve<DataStore<plumbingListingModel>> {

  constructor(private plumbingService: plumbingService) {}

  resolve(): DataStore<plumbingListingModel> {
    const dataSource: Observable<plumbingListingModel> = this.plumbingService.getListingDataSource();
    const dataStore: DataStore<plumbingListingModel> = this.plumbingService.getListingStore(dataSource);

    return dataStore;
  }
}
