import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { DataStore } from '../shell/data-store';
import { PaintingListingModel } from './listing/painting-listing.model';
import { PaintingDetailsModel } from './details/painting-details.model';

@Injectable()
export class PaintingService {
  private listingDataStore: DataStore<PaintingListingModel>;
  private detailsDataStore: DataStore<PaintingDetailsModel>;

  constructor(private http: HttpClient) { }

  public getListingDataSource(): Observable<PaintingListingModel> {
    return this.http.get<PaintingListingModel>('./assets/data/painting/listing.json')
    .pipe(
      map(
        (data: PaintingListingModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const listing = new PaintingListingModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(listing, data);

          return listing;
        }
      )
    );
  }

  public getListingStore(dataSource: Observable<PaintingListingModel>): DataStore<PaintingListingModel> {
    // Use cache if available
    if (!this.listingDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: PaintingListingModel = new PaintingListingModel();
      this.listingDataStore = new DataStore(shellModel);
      // Trigger the loading mechanism (with shell) in the dataStore
      this.listingDataStore.load(dataSource);
    }
    return this.listingDataStore;
  }

  public getDetailsDataSource(slug: string): Observable<PaintingDetailsModel> {
    return this.http.get<{items: Array<PaintingDetailsModel>}>('./assets/data/painting/details.json')
    .pipe(
      flatMap(details => details.items.filter(item => item.slug === slug)),
      map(
        (data: PaintingDetailsModel) => {
          // Note: HttpClient cannot know how to instantiate a class for the returned data
          // We need to properly cast types from json data
          const details = new PaintingDetailsModel();

          // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
          // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
          // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
          Object.assign(details, data);

          return details;
        }
      )
    );
  }

  public getDetailsStore(dataSource: Observable<PaintingDetailsModel>): DataStore<PaintingDetailsModel> {
    // Initialize the model specifying that it is a shell model
    const shellModel: PaintingDetailsModel = new PaintingDetailsModel();
    this.detailsDataStore = new DataStore(shellModel);
    // Trigger the loading mechanism (with shell) in the dataStore
    this.detailsDataStore.load(dataSource);

    return this.detailsDataStore;
  }
}
