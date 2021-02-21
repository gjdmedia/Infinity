import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { ElectricalDetailsModel } from './electrical-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { AnyTxtRecord } from 'dns';


@Component({
  selector: 'app-electrical-details',
  templateUrl: './electrical-details.page.html',
  styleUrls: [
    './styles/electrical-details.page.scss',
    './styles/electrical-details.shell.scss'
  ]

})
export class ElectricalDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };


  subscriptions: Subscription;
  //Electrons
  qCharge: any;
  tTime: any;
  iCurrent: any;

  //Resistance
  pResist: any;
  lLength: any;
  csArea: any;
  rValue: any;

  //Ohms
  vVolts: any;
  iCur: any;
  resistR: any;

  //Series & Parallel
  r1: any;
  r2: any;
  r3: any;
  seriesRtotal: any;
  seriesVoltage: any;
  seriesI: any;

  //Force
  mgFlux:any;
  conLength:any;
  conCurrent:any;
  conForce:any;

  //Static
  staticEMF:any;
  staticTime:any;
  magFlux:any;

  details: ElectricalDetailsModel;

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

    //Electrons
    this.qCharge = Math.floor(Math.random() * 400) + 10;
    var precision = 10; // 1 decimals
    this.tTime = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1 * precision);

    //Resistance
    this.pResist = "0.0000000172";
    this.lLength = Math.floor(Math.random() * 400) + 10;
    this.csArea = Array(1,1.5,2.5,4,6,10,16);
    this.csArea = this.csArea[Math.floor(Math.random() * this.csArea.length)];

    //Ohms
    this.vVolts = Math.floor(Math.random() * 200) + 10;
    this.iCur = Math.floor(Math.random() * 100) + 10;

    //Series

    this.r1 = Math.floor(Math.random() * 10) + 1;
    this.r2 = Math.floor(Math.random() * 10) + 1;
    this.r3 = Math.floor(Math.random() * 10) + 1;
    this.seriesVoltage = Math.floor(Math.random() * 100) + 1;

    //Force & EMF
    var precision = 10; // 2 decimals
    this.mgFlux = Math.floor(Math.random() * (0.1 * precision - 1 * precision) + 1 * precision) / (1*precision);
    this.conLength = Math.floor(Math.random() * (0.1 * precision - 1 * precision) + 1 * precision) / (1*precision);
    this.conCurrent = Math.floor(Math.random() * 100) + 10;

    //Static
    this.staticEMF = Math.floor(Math.random() * 400) + 10;
    this.staticTime = Math.floor(Math.random() * 200) + 10;


  }



  ngOnInit(): void {



    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
      .subscribe(
        (resolvedRouteData: IResolvedRouteData<ElectricalDetailsModel>) => {
          // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
          this.subscriptions = ResolverHelper.extractData<ElectricalDetailsModel>(resolvedRouteData.data, ElectricalDetailsModel)
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
            this.iCurrent = "";
            this.rValue = "";
            this.resistR = "";
            this.seriesRtotal = "";
            this.seriesI = "";
            this.conForce="";
            this.magFlux="";
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

  calculateElectrons(): void {


    var currentRounded = Math.round(this.qCharge / this.tTime * 10) / 10;
    console.trace(currentRounded);
    if (this.iCurrent == currentRounded) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateResistance(): void {


    var resistance = 0.0000000172 * this.lLength / this.csArea;
    console.trace(resistance);
    if (this.rValue == resistance) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateOhms(): void {


    var resistance = this.vVolts / this.iCur;
    resistance = Math.round(resistance * 10) / 10;
    console.trace(resistance);
    if (this.resistR == resistance) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  calculateSeries(): void {


    var resistancetotal = this.r1+this.r2+this.r3;
    var current = this.seriesVoltage / resistancetotal;
    current = Math.round(current * 10) / 10;
    console.trace(current);
    if (this.seriesI == current && this.seriesRtotal == resistancetotal) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }
  calculateParallel(): void {


    var resistancetotal = 1/this.r1+1/this.r2+1/this.r3;
    resistancetotal = Math.round(resistancetotal * 100) / 100;
    var current = this.seriesVoltage * resistancetotal;
    current = Math.round(current * 10) / 10;
    console.trace(resistancetotal);
    console.trace(current);
    if (this.seriesI == current && this.seriesRtotal == resistancetotal) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }

  // Calculates Force & EMF

  calculateForce(): void {

    var forceTotal = this.mgFlux*this.conLength*this.conCurrent;
    forceTotal = Math.round(forceTotal * 10) / 10;
    
    if (forceTotal == this.conForce) {
      console.trace('Correct!');

      this.presentToastCorrect();


    } else {

      this.presentToastIncorrect();
    }

  }


  calculateStatic(): void {

    var forceTotal = this.staticEMF*this.staticTime*0.1;
    forceTotal = Math.round(forceTotal * 10) / 10;
    
    if (forceTotal == this.magFlux) {
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
