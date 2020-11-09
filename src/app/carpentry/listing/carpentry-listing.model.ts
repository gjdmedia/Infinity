import { ShellModel } from '../../shell/data-store';

export class CarpentryItemModel {
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

export class CarpentryListingModel extends ShellModel {
  items: Array<CarpentryItemModel> = [
    new CarpentryItemModel(),
    new CarpentryItemModel(),
    new CarpentryItemModel(),
    new CarpentryItemModel()
  ];

  constructor() {
    super();
  }
}
