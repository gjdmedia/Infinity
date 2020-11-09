import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { CarpentryService } from '../carpentry.service';
import { CarpentryListingModel } from './carpentry-listing.model';

@Injectable()
export class CarpentryListingResolver implements Resolve<DataStore<CarpentryListingModel>> {

  constructor(private carpentryService: CarpentryService) {}

  resolve(): DataStore<CarpentryListingModel> {
    const dataSource: Observable<CarpentryListingModel> = this.carpentryService.getListingDataSource();
    const dataStore: DataStore<CarpentryListingModel> = this.carpentryService.getListingStore(dataSource);

    return dataStore;
  }
}
