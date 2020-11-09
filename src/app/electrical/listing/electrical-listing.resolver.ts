import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { DataStore } from '../../shell/data-store';
import { ElectricalService } from '../electrical.service';
import { ElectricalListingModel } from './electrical-listing.model';

@Injectable()
export class ElectricalListingResolver implements Resolve<DataStore<ElectricalListingModel>> {

  constructor(private electricalService: ElectricalService) {}

  resolve(): DataStore<ElectricalListingModel> {
    const dataSource: Observable<ElectricalListingModel> = this.electricalService.getListingDataSource();
    const dataStore: DataStore<ElectricalListingModel> = this.electricalService.getListingStore(dataSource);

    return dataStore;
  }
}
