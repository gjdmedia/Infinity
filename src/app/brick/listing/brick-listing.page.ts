import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { BrickListingModel } from './brick-listing.model';

@Component({
  selector: 'app-brick-listing',
  templateUrl: './brick-listing.page.html',
  styleUrls: [
    './styles/brick-listing.page.scss',
    './styles/brick-listing.shell.scss'
  ]
})
export class BrickListingPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  listing: BrickListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<BrickListingModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<BrickListingModel>(resolvedRouteData.data, BrickListingModel)
        .subscribe(
          (state) => {
            this.listing = state;
          },
          (error) => {}
        );
      },
      (error) => {}
    );
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    // console.log('TravelListingPage [ionViewWillLeave]');
    this.subscriptions.unsubscribe();
  }
}
