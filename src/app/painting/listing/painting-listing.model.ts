import { ShellModel } from '../../shell/data-store';

export class PaintingItemModel {
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

export class PaintingListingModel extends ShellModel {
  items: Array<PaintingItemModel> = [
    new PaintingItemModel(),
    new PaintingItemModel(),
    new PaintingItemModel(),
    new PaintingItemModel()
  ];

  constructor() {
    super();
  }
}
