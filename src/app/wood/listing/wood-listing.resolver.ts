import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { woodService } from '../wood.service';
import { woodListingModel } from './wood-listing.model';

@Injectable()
export class woodListingResolver implements Resolve<DataStore<woodListingModel>> {

  constructor(private woodService: woodService) {}

  resolve(): DataStore<woodListingModel> {
    const dataSource: Observable<woodListingModel> = this.woodService.getListingDataSource();
    const dataStore: DataStore<woodListingModel> = this.woodService.getListingStore(dataSource);

    return dataStore;
  }
}
