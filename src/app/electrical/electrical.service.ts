import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { ElectricalListingModel } from './listing/electrical-listing.model';
import { ElectricalDetailsModel } from './details/electrical-details.model';

@Injectable()
export class ElectricalService {
  private listingDataStore: DataStore<ElectricalListingModel>;
  private detailsDataStore: DataStore<ElectricalDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<ElectricalListingModel> {
    return this.http.get<ElectricalListingModel>('./assets/data/electrical/listing.json')
    .pipe(
      map(
        (data: ElectricalListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new ElectricalListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<ElectricalListingModel>): DataStore<ElectricalListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ElectricalListingModel = new ElectricalListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<ElectricalDetailsModel> {
    return this.http.get<{items: Array<ElectricalDetailsModel>}>('./assets/data/electrical/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: ElectricalDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new ElectricalDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<ElectricalDetailsModel>): DataStore<ElectricalDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: ElectricalDetailsModel = new ElectricalDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
