import { ShellModel } from '../../shell/data-store';

export class RoofingItemModel {
  icon: string;
  image: string;
  name: string;
  address: string;
  priceRange: number;
  rating: number;
  tags: Array<string> = [
    '',
    '',
    ''
  ];
  pictures: Array<string> = [
    '',
    '',
    '',
    '',
    ''
  ];
}

export class RoofingListingModel extends ShellModel {
  items: Array<RoofingItemModel> = [
    new RoofingItemModel(),
    new RoofingItemModel(),
    new RoofingItemModel(),
    new RoofingItemModel()
  ];

  constructor() {
    super();
  }
}
