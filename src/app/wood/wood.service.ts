import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { woodListingModel } from './listing/wood-listing.model';
import { woodDetailsModel } from './details/wood-details.model';

@Injectable()
export class woodService {
  private listingDataStore: DataStore<woodListingModel>;
  private detailsDataStore: DataStore<woodDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<woodListingModel> {
    return this.http.get<woodListingModel>('./assets/data/wood/listing.json')
    .pipe(
      map(
        (data: woodListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new woodListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<woodListingModel>): DataStore<woodListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: woodListingModel = new woodListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<woodDetailsModel> {
    return this.http.get<{items: Array<woodDetailsModel>}>('./assets/data/wood/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: woodDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new woodDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<woodDetailsModel>): DataStore<woodDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: woodDetailsModel = new woodDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
