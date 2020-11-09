import { ShellModel } from '../../shell/data-store';

export class plumbingItemModel {
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

export class plumbingListingModel extends ShellModel {
  items: Array<plumbingItemModel> = [
    new plumbingItemModel(),
    new plumbingItemModel(),
    new plumbingItemModel(),
    new plumbingItemModel()
  ];

  constructor() {
    super();
  }
}
