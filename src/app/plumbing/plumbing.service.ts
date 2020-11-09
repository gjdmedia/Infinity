import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { plumbingListingModel } from './listing/plumbing-listing.model';
import { plumbingDetailsModel } from './details/plumbing-details.model';

@Injectable()
export class plumbingService {
  private listingDataStore: DataStore<plumbingListingModel>;
  private detailsDataStore: DataStore<plumbingDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<plumbingListingModel> {
    return this.http.get<plumbingListingModel>('./assets/data/plumbing/listing.json')
    .pipe(
      map(
        (data: plumbingListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new plumbingListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<plumbingListingModel>): DataStore<plumbingListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: plumbingListingModel = new plumbingListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<plumbingDetailsModel> {
    return this.http.get<{items: Array<plumbingDetailsModel>}>('./assets/data/plumbing/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: plumbingDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new plumbingDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<plumbingDetailsModel>): DataStore<plumbingDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: plumbingDetailsModel = new plumbingDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
