import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { CarpentryListingModel } from './listing/carpentry-listing.model';
import { CarpentryDetailsModel } from './details/carpentry-details.model';

@Injectable()
export class CarpentryService {
  private listingDataStore: DataStore<CarpentryListingModel>;
  private detailsDataStore: DataStore<CarpentryDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<CarpentryListingModel> {
    return this.http.get<CarpentryListingModel>('./assets/data/carpentry/listing.json')
    .pipe(
      map(
        (data: CarpentryListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new CarpentryListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<CarpentryListingModel>): DataStore<CarpentryListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: CarpentryListingModel = new CarpentryListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<CarpentryDetailsModel> {
    return this.http.get<{items: Array<CarpentryDetailsModel>}>('./assets/data/carpentry/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: CarpentryDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new CarpentryDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<CarpentryDetailsModel>): DataStore<CarpentryDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: CarpentryDetailsModel = new CarpentryDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
