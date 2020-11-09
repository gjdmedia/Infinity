import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
          },
          {
            path: 'fashion',
            loadChildren: () => import('../fashion/listing/fashion-listing.module').then(m => m.FashionListingPageModule)
          },
          {
            path: 'fashion/:productId',
            loadChildren: () => import('../fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          },
          {
            path: 'plumbing',
            loadChildren: () => import('../plumbing/listing/plumbing-listing.module').then(m => m.plumbingListingPageModule)
          },
          {
            path: 'plumbing/:productId',
            loadChildren: () => import('../plumbing/details/plumbing-details.module').then(m => m.plumbingDetailsPageModule)
          }
          ,
          {
            path: 'wood',
            loadChildren: () => import('../wood/listing/wood-listing.module').then(m => m.woodListingPageModule)
          },
          {
            path: 'wood/:productId',
            loadChildren: () => import('../wood/details/wood-details.module').then(m => m.woodDetailsPageModule)
          }
          ,
          {
            path: 'carpentry',
            loadChildren: () => import('../carpentry/listing/carpentry-listing.module').then(m => m.CarpentryListingPageModule)
          },
          {
            path: 'carpentry/:productId',
            loadChildren: () => import('../carpentry/details/carpentry-details.module').then(m => m.CarpentryDetailsPageModule)
          },
          {
            path: 'painting',
            loadChildren: () => import('../painting/listing/painting-listing.module').then(m => m.PaintingListingPageModule)
          },
          {
            path: 'painting/:productId',
            loadChildren: () => import('../painting/details/painting-details.module').then(m => m.PaintingDetailsPageModule)
          },
          {
            path: 'electrical',
            loadChildren: () => import('../electrical/listing/electrical-listing.module').then(m => m.ElectricalListingPageModule)
          },
          {
            path: 'electrical/:productId',
            loadChildren: () => import('../electrical/details/electrical-details.module').then(m => m.ElectricalDetailsPageModule)
          },
          {
            path: 'brick',
            loadChildren: () => import('../brick/listing/brick-listing.module').then(m => m.BrickListingPageModule)
          },
          {
            path: 'brick/:productId',
            loadChildren: () => import('../brick/details/brick-details.module').then(m => m.BrickDetailsPageModule)
          },
          {
            path: 'roofing',
            loadChildren: () => import('../roofing/listing/roofing-listing.module').then(m => m.RoofingListingPageModule)
          },
          {
            path: 'roofing/:productId',
            loadChildren: () => import('../roofing/details/roofing-details.module').then(m => m.RoofingDetailsPageModule)
          },
          {
            path: 'travel',
            loadChildren: () => import('../travel/listing/travel-listing.module').then(m => m.TravelListingPageModule)
          },
          {
            path: 'travel/:productId',
            loadChildren: () => import('../travel/details/travel-details.module').then(m => m.TravelDetailsPageModule)
          },
          {
            path: 'deals',
            loadChildren: () => import('../deals/listing/deals-listing.module').then(m => m.DealsListingPageModule)
          },
          {
            path: 'deals/:productId',
            loadChildren: () => import('../deals/details/deals-details.module').then(m => m.DealsDetailsPageModule)
          },
          {
            path: 'real-estate',
            loadChildren: () => import('../real-estate/listing/real-estate-listing.module').then(m => m.RealEstateListingPageModule)
          },
          {
            path: 'real-estate/:productId',
            loadChildren: () => import('../real-estate/details/real-estate-details.module').then(m => m.RealEstateDetailsPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
