import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { BrickDetailsModel } from './brick-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';


@Component({
  selector: 'app-brick-details',
  templateUrl: './brick-details.page.html',
  styleUrls: [
    './styles/brick-details.page.scss',
    './styles/brick-details.shell.scss'
  ]

})
export class BrickDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };


  subscriptions: Subscription;
  side1: any;
  side2: any;
  side3: any;
  side4: any;
  side1a: any;
  side2a: any;
  doorWidth: any;
  doorHeight: any;
  wallArea: any;
  doorArea: any;
  totalArea: any;
  subtractDoorArea: any;
  brickWallArea: any;
  brickCoverage: any;
  brickCoverage12: any;
  brickCoverage40: any;
  totalBricks: any;
  bricksRequired: any;
  costPerBrick: any;
  totalCostBrick: any;
  //Gable
  side1Tri: any;
  side2Tri: any;
  totalTri: any;

  //Wall Tiles
  noTiles: any;
  tilesPerPack: any;
  pricePack: any;
  numberPacks: any;
  totalCostTiles: any;
  vatTiles: any;
  totalCostTilesVAT: any;

  // Cement

  cement: any;
  cementRequired: any;
  sand: any;
  sandRequired: any;
  cement1: any;
  cementRequired1: any;
  sand1: any;
  sandRequired1: any;
  totalMix: any;
  sandMix: any;
  cementMix: any;

  //Raft
  raftWidth: any;
  raftHeight: any;
  raftDepth: any;
  convertedDepth: any;
  requiredConcrete: any;  // Discount
  brushesCost: any;
  rollersCost: any;
  maskingCost: any;
  caulkCost: any;
  dropCost: any;
  discount: any;
  totalXDiscount: any;
  discountTotal: any;
  totalCost: any;

  //Build
  brickArea: any;
  bricksDay: any;
  bricksSquareM: any;
  paymentBricks: any;
  bricksToLay: any;
  numberDays: any;
  totalCostBricks: any;

  details: BrickDetailsModel;

  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  @HostBinding('class.first-slide-active') isFirstSlide = true;

  @HostBinding('class.last-slide-active') isLastSlide = false;

  @HostBinding('class.is-shell') get isShell() {
    return (this.details && this.details.isShell) ? true : false;
  }



  constructor(public menu: MenuController, private route: ActivatedRoute, public toastController: ToastController) {

    this.generateSides();

  }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    this.menu.enable(true);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    this.menu.enable(true);
  }

  ngAfterViewInit(): void {
    // ViewChild is set
    this.slides.isBeginning().then(isBeginning => {
      this.isFirstSlide = isBeginning;
    });
    this.slides.isEnd().then(isEnd => {
      this.isLastSlide = isEnd;
    });

    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isBeginning().then(isBeginning => {
        this.isFirstSlide = isBeginning;
      });
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }

  skipWalkthrough(): void {
    // Skip to the last slide
    this.slides.length().then(length => {
      this.slides.slideTo(length);
    });
  }

  generateSides(): void {

    //Wall
    this.side1 = Math.floor(Math.random() * 11) + 5;
    this.side2 = this.side1 / 2;
    console.trace('Random: ', this.side1);
    this.side1a = Math.floor(Math.random() * 30) + 5;
    this.side2a = this.side1a * 0.384615385;
    this.side2a = Math.round(this.side2a * 10) / 10;
    this.doorHeight = this.side2 * 0.57;
    this.doorHeight = Math.round(this.doorHeight * 10) / 10;
    this.doorWidth = this.doorHeight * 0.615;
    this.doorWidth = Math.round(this.doorWidth * 10) / 10;

    // Bricks
    this.brickWallArea = Math.floor(Math.random() * 150) + 100;
    this.brickCoverage12 = 12;
    this.brickCoverage40 = 40;

    //Cost
    this.bricksRequired = Math.floor(Math.random() * 3500) + 1000;
    var precision = 100; // 2 decimals
    this.costPerBrick = Math.floor(Math.random() * (0.5 * precision - 1 * precision) + 1 * precision) / (1 * precision);

    //Gable
    this.side2Tri = Math.floor(Math.random() * 30) + 5;
    this.side1Tri = this.side2Tri * 0.7;
    this.side1Tri = Math.round(this.side1Tri);

    //Wall Tiles
    this.noTiles = Math.floor(Math.random() * 350) + 100;
    this.tilesPerPack = Math.floor(Math.random() * 20) + 10;
    this.pricePack = Math.floor(Math.random() * (29.99 * precision - 1.00 * precision) + 1 * precision) / (1 * precision);

    //Cement
    this.cement = Math.floor(Math.random() * 100) + 10;
    this.sand = this.cement * 5;
    this.cement1 = Math.floor(Math.random() * 100) + 10;
    this.sand1 = this.cement1 * 5;
    this.totalMix = Math.floor(Math.random() * 150) + 10;

    //Raft
    this.raftDepth = Math.floor(Math.random()*7);
    this.raftDepth = this.raftDepth * 30 + 100;
    this.raftHeight = Math.floor(Math.random() * 40) + 10;
    this.raftWidth = Math.round(this.raftHeight * 0.7);

    // Discount
    this.brushesCost = Math.floor(Math.random() * 20) + 10;
    this.maskingCost = Math.floor(Math.random() * 10) + 1;
    this.rollersCost = Math.floor(Math.random() * 20) + 1;
    this.caulkCost = Math.floor(Math.random() * 15) + 2;
    this.dropCost = Math.floor(Math.random() * 100) + 10;
    this.discount = Math.floor(Math.random() * 20) + 5;

    // Build
    this.brickArea = Math.floor(Math.random() * 150) + 50;
    this.bricksDay = Math.floor(Math.random() * 400) + 200;
    this.bricksSquareM = 60;
    this.paymentBricks = Math.floor(Math.random() * 600) + 500;

  }



  ngOnInit(): void {



    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
      .subscribe(
        (resolvedRouteData: IResolvedRouteData<BrickDetailsModel>) => {
          // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
          this.subscriptions = ResolverHelper.extractData<BrickDetailsModel>(resolvedRouteData.data, BrickDetailsModel)
            .subscribe(
              (state) => {
                this.details = state
              },
              (error) => { }
            );
        },
        (error) => { }
      );
  }

  async presentToastCorrect() {
    const toast = await this.toastController.create({
      header: 'Correct!',
      message: 'Well Done.',
      position: 'bottom',
      buttons: [
        {
          text: 'Next',
          role: 'cancel',
          handler: () => {
            this.generateSides();
            this.side3 = "";
            this.side4 = "";
            this.totalArea = "";
            this.wallArea = "";
            this.doorArea = "";
            this.subtractDoorArea = "";
            this.totalBricks = "";
            this.totalTri = "";
            this.numberPacks = "";
            this.totalCostTiles = "";
            this.totalCostTilesVAT = "";
            this.vatTiles = "";
            this.sandRequired = "";
            this.cementRequired = "";
            this.sandRequired1 = "";
            this.cementRequired1 = "";
            this.sandMix = "";
            this.cementMix = "";
            this.convertedDepth = "";
            this.requiredConcrete = "";
            this.bricksToLay = "";
            this.numberDays = "";
            this.totalCostBricks = "";
          }
        }
      ]
    });
    toast.present();
  }

  async presentToastIncorrect() {
    const toast = await this.toastController.create({
      message: 'Try again!',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  //Wall

  calculateSimpleArea(): void {



    if (this.totalArea == this.side1 * this.side2) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateDoorRemoved(): void {

    var wall = this.side1a * this.side2a;
    var door = this.doorWidth * this.doorHeight;


    console.trace('Wall Area: ' + wall + 'Door Area :' + door)

    if (this.subtractDoorArea == wall - door) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateBricks12(): void {

    var wall = this.brickWallArea * this.brickCoverage12;
    wall = Math.round(wall * 10) / 10;

    if (this.totalBricks == wall) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateBricks40(): void {

    var wall = this.brickWallArea * this.brickCoverage40;
    wall = Math.round(wall * 10) / 10;

    if (this.totalBricks == wall) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateSimpleCost(): void {

    var cost = this.bricksRequired * this.costPerBrick;
    cost = Math.round(cost * 100) / 100;

    if (this.totalCostBrick == cost) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateSimpleTri(): void {

    if (this.totalTri == (this.side2Tri / 2) * this.side1Tri) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateTiles(): void {

    var packs = Math.ceil(this.noTiles / this.tilesPerPack)


    if (this.totalCostTiles == this.pricePack * packs && packs == this.numberPacks) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }
  calculateTilesVAT(): void {

    var packs = Math.ceil(this.noTiles / this.tilesPerPack)
    var cost = Math.round((packs * this.pricePack) * 100) / 100;
    var VAT = Math.round((cost * 0.2) * 100) / 100;
    var totalIncVat = cost + VAT;
    totalIncVat = Math.round(totalIncVat * 100) / 100;
    console.trace('Packs: ' + packs + ' xVat :' + cost + ' VAT ' + VAT + ' Total: ' + totalIncVat);


    if (this.totalCostTilesVAT == totalIncVat) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }


  calculateSand(): void {



    if (this.sand == this.sandRequired) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }
  calculateCement(): void {



    if (this.cement1 == this.cementRequired1) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }
  calculateMix(): void {

    var part = this.totalMix / 6;



    if (this.cementMix == part && this.sandMix == (part * 5)) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateRaft(): void {

    var conversion = this.raftDepth / 1000;
    var concrete = this.raftDepth * this.raftHeight * this.raftWidth / 1000;

    console.trace(concrete);

    if (this.convertedDepth == conversion && this.requiredConcrete == concrete) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateDiscount(): void {


    var subTotal = this.brushesCost + this.rollersCost + this.maskingCost + this.caulkCost + this.dropCost;
    var discAmount = Math.round(subTotal * (this.discount / 100) * 100) / 100;


    console.trace("Subtotal = " + subTotal + "Discount = " + discAmount)

    if (this.totalCost == subTotal - discAmount) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateBuild(): void {


    var bricksToBeLayed = this.brickArea * this.bricksSquareM;
    var daysNeeded = Math.ceil(bricksToBeLayed / this.bricksDay);
    var moneyEarned = bricksToBeLayed/1000 * this.paymentBricks;
    moneyEarned = Math.ceil(moneyEarned * 100) / 100;
    console.trace("Bricks to Lay = " + bricksToBeLayed + "Days = " + daysNeeded + "Money = " + moneyEarned)

    if (this.bricksToLay == bricksToBeLayed && this.numberDays == daysNeeded && this.totalCostBricks == moneyEarned) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }


  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    // console.log('TravelListingPage [ionViewWillLeave]');
    this.subscriptions.unsubscribe();
  }
}
