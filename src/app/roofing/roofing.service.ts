import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { RoofingListingModel } from './listing/roofing-listing.model';
import { RoofingDetailsModel } from './details/roofing-details.model';

@Injectable()
export class RoofingService {
  private listingDataStore: DataStore<RoofingListingModel>;
  private detailsDataStore: DataStore<RoofingDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<RoofingListingModel> {
    return this.http.get<RoofingListingModel>('./assets/data/roofing/listing.json')
    .pipe(
      map(
        (data: RoofingListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new RoofingListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<RoofingListingModel>): DataStore<RoofingListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: RoofingListingModel = new RoofingListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<RoofingDetailsModel> {
    return this.http.get<{items: Array<RoofingDetailsModel>}>('./assets/data/roofing/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: RoofingDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new RoofingDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<RoofingDetailsModel>): DataStore<RoofingDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: RoofingDetailsModel = new RoofingDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
