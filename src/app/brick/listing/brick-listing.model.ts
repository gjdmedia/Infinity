import { ShellModel } from '../../shell/data-store';

export class BrickItemModel {
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

export class BrickListingModel extends ShellModel {
  items: Array<BrickItemModel> = [
    new BrickItemModel(),
    new BrickItemModel(),
    new BrickItemModel(),
    new BrickItemModel()
  ];

  constructor() {
    super();
  }
}
