import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { plumbingDetailsModel } from './plumbing-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { AnyRecordWithTtl, AnyTxtRecord } from 'dns';


@Component({
  selector: 'app-plumbing-details',
  templateUrl: './plumbing-details.page.html',
  styleUrls: [
    './styles/plumbing-details.page.scss',
    './styles/plumbing-details.shell.scss'
  ]

})
export class plumbingDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };


  subscriptions: Subscription;

  // Convert
  metres: any;
  convertedMetres: any;
  centimetre: any;
  convertedCent: any;

  // Area
  side1: any;
  side2: any;
  side3: any;
  side4: any;
  side1a: any;
  side2a: any;
  side3a: any;
  side4a: any;
  side5a: any;
  side6a: any;
  total: any;
  totala: any;
  totalArea: any;

  //WallArea
  wallDepth: any;
  wallWidth: any;
  wallHeight: any;
  totalWallArea: any;

  //Litres
  litresPMin: any;
  litresPsec: any;

  //Joist
  joistThickness: any;
  maxDepth: any;
  maxPipe: any;

  //cylinder
  cylDiameter: any;
  cylRadius: any;
  baseArea: any;
  cylHeight: any;
  cylVolume: any;
  volLitre: any;
  volM3: any;

  // Water Pressure
  sysPressure: any;
  sysNewton: any;

  // Gutter
  gutterLength: any;
  startTemp: any;
  finishTemp: any;
  cleValue: any;
  expansion: any;

  // Heat Cap
  waterVol: any;
  startTempCap: any;
  finishTempCap: any;
  heatCap: any;
  energyCap: any;

  details: plumbingDetailsModel;

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

    // Convert
    var precision = 10; // 1 decimals
    this.metres = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    this.centimetre = Math.floor(Math.random() * 600) + 200;

    //Area
    this.side1 = (Math.floor(Math.random() * 100) + 1) * 100;
    this.side2 = this.side1 / 2;
    console.trace('Random: ', this.side1)

    this.side1a = (Math.floor(Math.random() * 100) + 10) * 100;
    this.side2a = this.side1a * 0.3;
    this.side2a = Math.round(this.side2a * 10) / 10;

    this.side5a = this.side1a * 0.57;
    this.side5a = Math.round(this.side5a * 10) / 10;

    this.side6a = this.side1a * 0.62;
    this.side6a = Math.round(this.side6a * 10) / 10;

    // Room Volume

    this.wallWidth = Math.floor(Math.random() * 10) + 3;
    this.wallDepth = this.wallWidth * 0.8;
    this.wallDepth = Math.round(this.wallDepth * 10) / 10;
    this.wallHeight = 2.5;

    //Litres
    this.litresPMin = Math.floor(Math.random() * 50) + 1;

    //Joist
    this.joistThickness = Math.floor(Math.random() * 200) + 100;
    this.maxDepth = "1 / 8";

    //Cylinder
    this.cylDiameter = Math.floor(Math.random() * 500) + 400;
    this.cylHeight = this.cylDiameter * 2;
    this.cylRadius = this.cylDiameter / 2;

    //Water Pressure
    this.sysPressure = Math.floor(Math.random() * 20) + 1;

    //Gutter
    this.gutterLength = Math.floor(Math.random() * 20) + 1;
    this.finishTemp = Math.floor(Math.random() * 20) + 10;
    this.startTemp = Math.ceil(this.finishTemp * 0.4);
    this.cleValue = 0.000018;

    //Heat Cap
    this.waterVol = Math.floor(Math.random() * 200) + 100;
    this.finishTempCap = Math.floor(Math.random() * 95) + 40;
    this.startTempCap = Math.floor(Math.random() * 20) + 5;
    this.heatCap = 4.186;
  }



  ngOnInit(): void {



    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
      .subscribe(
        (resolvedRouteData: IResolvedRouteData<plumbingDetailsModel>) => {
          // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
          this.subscriptions = ResolverHelper.extractData<plumbingDetailsModel>(resolvedRouteData.data, plumbingDetailsModel)
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
            this.convertedMetres = "";
            this.convertedCent = "";
            this.side3 = "";
            this.side4 = "";
            this.side3a = "";
            this.side4a = "";
            this.total = "";
            this.totala = "";
            this.totalArea = "";
            this.totalWallArea = "";
            this.litresPsec = "";
            this.maxPipe = "";
            this.volM3 = "";
            this.volLitre = "";
            this.baseArea = "";
            this.sysNewton = "";
            this.expansion = "";
            this.energyCap = "";
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

  calculateM5toCM(): void {

    var conversion = this.metres * 1000;
    conversion = Math.round(conversion * 10) / 10;

    if (conversion == this.convertedMetres) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateM5toMM(): void {

    var conversion = this.centimetre * 10;
    conversion = Math.round(conversion * 10) / 10;

    if (conversion == this.convertedCent) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateSimpleArea(): void {

    var conversion = ((this.side1 * this.side2) / 1000000);
    conversion = Math.round(conversion * 100) / 100;
    console.trace(conversion);

    if (this.totalArea == conversion) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateComplexArea(): void {

    var s3 = this.side1a - this.side5a;
    var s4 = this.side6a - this.side2a
    var area1 = this.side1a * this.side2a;
    var area2 = this.side4a * this.side5a;
    var conversion = (area1 + area2) / 1000000;
    conversion = Math.round(conversion * 100) / 100;
    console.trace("Side 3 " + s3 + " Side 4" + s4 + " A1 " + area1 + " A2 " + area2 + " Conversion " + conversion);

    if (this.totalArea == conversion) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateRoomVolume(): void {

    var areaCubed = (this.wallDepth * this.wallWidth) * this.wallHeight;
    areaCubed = Math.ceil(areaCubed * 10) / 10;
    console.trace(areaCubed);

    if (this.totalWallArea == areaCubed) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateLitres(): void {

    var litres = this.litresPMin / 60;
    litres = Math.round(litres * 100) / 100;
    console.trace(litres);

    if (this.litresPsec == litres) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateJoist(): void {

    var pipe = this.joistThickness / 8;
    pipe = Math.round(pipe * 100) / 100;
    console.trace(pipe);

    if (this.maxPipe == pipe) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateCylinder(): void {

    var area = this.cylDiameter * this.cylRadius;
    area = Math.round(area * 100) / 100;
    var vol = area * this.cylHeight;
    vol = Math.round(vol * 100) / 100;
    var volL = vol * 0.000001;
    volL = Math.round(volL * 100) / 100;
    var volMetres3 = volL / 1000;
    volMetres3 = Math.round(volMetres3 * 100) / 100;


    console.trace("Area :" + area + " Volume :" + vol + " Vol Litres" + volL + " vol m3 " + volMetres3);

    if (this.volLitre == volL && this.volM3 == volMetres3) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculatePressure(): void {

    var pressure = this.sysPressure * 9.81;
    pressure = Math.round(pressure * 100) / 100;

    console.trace(pressure)

    if (pressure == this.sysNewton) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateGutter(): void {

    var tempincrease = this.finishTemp - this.startTemp;
    var expansionCalc = this.cleValue * this.gutterLength * tempincrease;
    expansionCalc = Math.round((expansionCalc * 1000) * 100) / 100;

    console.trace(expansionCalc)

    if (expansionCalc == this.expansion) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateCap(): void {

    var tempincrease = this.finishTempCap - this.startTempCap;
    var expansionCalc = this.waterVol * tempincrease * this.heatCap;
    expansionCalc = Math.round((expansionCalc / 3412) * 100) / 100;

    console.trace(expansionCalc)

    if (expansionCalc == this.energyCap) {
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
