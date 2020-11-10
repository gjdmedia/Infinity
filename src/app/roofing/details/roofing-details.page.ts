import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { RoofingDetailsModel } from './roofing-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { AnyTxtRecord } from 'dns';


@Component({
  selector: 'app-roofing-details',
  templateUrl: './roofing-details.page.html',
  styleUrls: [
    './styles/roofing-details.page.scss',
    './styles/roofing-details.shell.scss'
  ]

})
export class RoofingDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };


  subscriptions: Subscription;

  // Labour

  labourCost: any;
  labourHours: any;
  totalPay: any;

  // Discount
  orderCost: any;
  discount: any;
  discountValue: any;
  finalCost: any;

  //Breakages
  numberTiles: any;
  breakage: any;
  totalTiles: any;

  // Pallet & Cost
  numberPalletTiles: any;
  numberPerPallet: any;
  pallettsNeeded: any;
  totalTilesOrdered: any;
  spareTiles: any;
  costPerTile: any;
  sparesIncome: any;
  deliveryCharge: any;
  costVAT: any;
  totalTilesCost: any;
  totalCostIncVAT: any;

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

   // Gable
  rise:any;
  span:any;
  length:any;
  slope:any;
  singleArea:any;
  totalArea:any;
  halfSpan:any;
  riseSquared:any;

  //Tiles & Gutter
  roofWidth:any;
  roofHeight:any;
  roofArea:any;
  tilesPerSqM:any;
  roofTilesNeeded:any;
  breakageAllowance:any;
  totalTilesRoof:any;
  totalGuttering:any;
  
  

  details: RoofingDetailsModel;

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
    var precision = 100; // 2 decimals

    // Labour
    this.labourHours = Math.floor(Math.random() * 30) + 10;
    this.labourCost = Math.floor(Math.random() * (25.99 * precision - 1.00 * precision) + 1 * precision) / (1 * precision);

    // Discount
    this.discount = Math.floor(Math.random() * 30) + 10;
    this.orderCost = Math.floor(Math.random() * (250.99 * precision - 100.00 * precision) + 1 * precision) / (1 * precision);

    // Breakages
    this.numberTiles = Math.floor(Math.random() * 900) + 700;
    this.breakage = Math.floor(Math.random() * 30) + 1;

    //Pallet & Cost
    this.numberPalletTiles = Math.floor(Math.random() * 3500) + 700;
    this.numberPerPallet = Math.floor(Math.random() * 300) + 200;
    this.costPerTile = Math.floor(Math.random() * (0.99 * precision - 0.4 * precision) + 1 * precision) / (1 * precision);
    this.deliveryCharge = Math.floor(Math.random() * 70) + 20;

     //Cement
     this.cement = Math.floor(Math.random() * 100) + 10;
     this.sand = this.cement * 3;
     this.cement1 = Math.floor(Math.random() * 100) + 10;
     this.sand1 = this.cement1 * 3;
     this.totalMix = Math.floor(Math.random() * 150) + 10;

     // Gable
     this.span = Math.floor(Math.random() * 15) + 5;
     this.rise = Math.round(this.span * 0.4 *10) / 10;
     this.length = Math.floor(Math.random() * 15) + 5;

     //Tiles & Gutter
     this.roofWidth = Math.floor(Math.random() * 15) + 5;
     this.roofHeight = Math.round(this.span * 0.4 *10) / 10;
     this.tilesPerSqM = Math.floor(Math.random() * 60) + 40;


  }



  ngOnInit(): void {



    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
      .subscribe(
        (resolvedRouteData: IResolvedRouteData<RoofingDetailsModel>) => {
          // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
          this.subscriptions = ResolverHelper.extractData<RoofingDetailsModel>(resolvedRouteData.data, RoofingDetailsModel)
            .subscribe(
              (state) => {
                this.details = state;
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
            this.totalPay = "";
            this.discountValue = "";
            this.finalCost = "";
            this.totalTiles = "";
            this.pallettsNeeded = "";
            this.totalTilesOrdered = "";
            this.spareTiles = "";
            this.sparesIncome = "";
            this.totalTilesCost = "";
            this.costVAT = "";
            this.totalCostIncVAT = "";
            this.sandRequired = "";
            this.cementRequired = "";
            this.sandRequired1 = "";
            this.cementRequired1 = "";
            this.sandMix = "";
            this.cementMix = "";
            this.halfSpan = "";
            this.riseSquared = "";
            this.slope = "";
            this.singleArea = "";
            this.totalArea = "";
            this.roofArea = "";
            this.roofTilesNeeded = "";
            this.breakageAllowance = "";
            this.totalTilesRoof = "";
            this.totalGuttering = "";
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

  calculateLabour(): void {

    var pay = Math.round((this.labourCost * this.labourHours) * 100) / 100;
    console.trace(pay);

    if (pay == this.totalPay) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateDiscount(): void {

    var discAmount = Math.round(this.orderCost * (this.discount / 100) * 100) / 100;
    console.trace("OrderCost: £" + this.orderCost + " Discount : £" + discAmount);

    if (discAmount == this.discountValue && this.finalCost == this.orderCost - discAmount) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateBreakages(): void {

    console.trace(this.numberTiles)
    console.trace(this.breakage)

    var breakAllowance = Math.ceil(this.numberTiles * (this.breakage / 100));
    console.trace(breakAllowance);

    if (this.numberTiles + breakAllowance == this.totalTiles) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculatePalletSimple(): void {

    console.trace(this.numberPalletTiles)
    console.trace(this.numberPerPallet)

    var PalsNeeded = Math.ceil(this.numberPalletTiles / this.numberPerPallet);
    console.trace(PalsNeeded);

    if (this.pallettsNeeded == PalsNeeded) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }
  calculatePalletAdvanced(): void {

    console.trace(this.numberPalletTiles)
    console.trace(this.numberPerPallet)

    var PalsNeeded = Math.ceil(this.numberPalletTiles / this.numberPerPallet);
    console.trace(PalsNeeded);

    var spares = this.numberPerPallet * this.pallettsNeeded - this.numberPalletTiles;
    console.trace(spares);

    if (this.sparesIncome == spares * this.costPerTile) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateCost(): void {

    var costXvat = Math.round((this.numberTiles * this.costPerTile + this.deliveryCharge) * 100) / 100;
    var vat = Math.ceil((costXvat *0.02) *100) / 100;
    var costWithVAT = Math.ceil((costXvat + vat) * 100) / 100;
    console.trace(costXvat + " " + vat + " " + costWithVAT)

    if (costWithVAT == this.totalCostIncVAT) {
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

    var part = this.totalMix / 4;



    if (this.cementMix == part && this.sandMix == (part * 3)) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateGable(): void {

    var halfSpanSq = Math.round((this.span / 2) * (this.span / 2) * 100) / 100 ;
    var riseSq = Math.round((this.rise * this.rise) * 100)/ 100;

    var slopeRoot = Math.round((Math.sqrt(halfSpanSq + riseSq)) * 100) / 100;
    
    console.trace(halfSpanSq + " " + riseSq + " " + slopeRoot);

    var ssArea = this.length * slopeRoot;

     if (ssArea*2 == this.totalArea) {
       console.trace('Correct!');

       this.presentToastCorrect();


     } else {

       this.presentToastIncorrect();
    }

    

  }

  calculateTiles(): void {

    var area = Math.round((this.roofWidth * this.roofHeight) * 100) / 100 ;
    var required = Math.ceil(area * this.tilesPerSqM);
    var spareBreak = Math.ceil(required *0.15);
     console.trace(required + " " + spareBreak);
    

     if (required + spareBreak == this.totalTilesRoof) {
       console.trace('Correct!');

       this.presentToastCorrect();


     } else {

       this.presentToastIncorrect();
    }

    

  }

  calculateGutter(): void {

    var gutterRequired = this.roofHeight + this.roofHeight + this.roofWidth + this.roofWidth;
    var hang = Math.round(((this.tilesPerSqM /1000) * 4) * 100 )/ 100;
    

     if (gutterRequired + hang == this.totalGuttering) {
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
