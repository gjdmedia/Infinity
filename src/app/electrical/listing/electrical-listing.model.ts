import { ShellModel } from '../../shell/data-store';

export class ElectricalItemModel {
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

export class ElectricalListingModel extends ShellModel {
  items: Array<ElectricalItemModel> = [
    new ElectricalItemModel(),
    new ElectricalItemModel(),
    new ElectricalItemModel(),
    new ElectricalItemModel()
  ];

  constructor() {
    super();
  }
}
