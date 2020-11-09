import { ShellModel } from '../../shell/data-store';

export class woodItemModel {
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

export class woodListingModel extends ShellModel {
  items: Array<woodItemModel> = [
    new woodItemModel(),
    new woodItemModel(),
    new woodItemModel(),
    new woodItemModel()
  ];

  constructor() {
    super();
  }
}
