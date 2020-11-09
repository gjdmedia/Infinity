import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { woodDetailsModel } from './wood-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';
import { AnyTxtRecord } from 'dns';


@Component({
  selector: 'app-wood-details',
  templateUrl: './wood-details.page.html',
  styleUrls: [
    './styles/wood-details.page.scss',
    './styles/wood-details.shell.scss'
  ]

})
export class woodDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };


  subscriptions: Subscription;

  // Area and Perimiter
  side1: any;
  side2: any;
  side3: any;
  side4: any;
  totalArea: any;
  total: any;
  carpenters: any;
  percentageincrease: any;
  carpsNeeded:any;
  totalCarps:any;
  totalTimber:any;
  noWindows: any;
  windowBoard:any;
  timberPerDoor:any;
  noDoors:any;
  totalDoorTimber:any;
  vanSpeed:any;
  vanTime:any;
  vanDistance:any;

  

  details: woodDetailsModel;

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
    var precision = 10; // 1 decimals
    //Area and perimiter
    this.side1 = Math.floor(Math.random() * 15) + 5; 
    this.side2 = this.side1 /2;
    //Carpenters
    this.carpenters = Math.floor(Math.random() * 250000) + 100000; 
    this.percentageincrease = Math.floor(Math.random() * 20) + 5; 
    // Windows
    this.noWindows = Math.floor(Math.random() * 30) + 5;
    this.windowBoard = Math.floor(Math.random() * 600) + 300;
    // Doors
    this.noDoors = Math.floor(Math.random() * 30) + 10;
    //Travel Time
    this.vanSpeed = Math.floor(Math.random() * 50) + 30;
    this.vanTime = Math.floor(Math.random() * (2 * precision - 1 * precision) + 1 * precision) / (1*precision);
  }



  ngOnInit(): void {



    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
      .subscribe(
        (resolvedRouteData: IResolvedRouteData<woodDetailsModel>) => {
          // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
          this.subscriptions = ResolverHelper.extractData<woodDetailsModel>(resolvedRouteData.data, woodDetailsModel)
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
            this.side3 = "";
            this.side4 = "";
            this.totalArea = "";
            this.carpsNeeded = "";
            this.totalCarps = "";
            this.totalTimber = "";
            this.timberPerDoor = "";
            this.totalDoorTimber = "";
            this.vanDistance = "";
           
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


  calculateSimple():void {

    

    if (this.total == this.side1+this.side1+this.side2+this.side2) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateSimpleArea():void {

    

    if (this.totalArea == this.side1*this.side2) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateCarpenters():void {

    var requiredCarps = this.carpenters / 100 * this.percentageincrease;
    requiredCarps = Math.ceil(requiredCarps);
    console.trace(requiredCarps);

    if (this.carpsNeeded == requiredCarps && requiredCarps + this.carpenters == this.totalCarps) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }
  calculateWindows():void {

    var requiredTimber = this.noWindows * this.windowBoard;
    //requiredTimber = Math.ceil(requiredTimber);
    console.trace(requiredTimber);

    if (requiredTimber == this.totalTimber) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }
  calculateDoors():void {

    var requiredTimber = this.noDoors * this.timberPerDoor;
    requiredTimber = Math.round(requiredTimber * 100) / 100;
    console.trace(requiredTimber);

    if (requiredTimber == this.totalDoorTimber) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateTravel():void {

    var travelled = this.vanSpeed * this.vanTime;
    travelled = Math.round(travelled * 100) / 100;
    console.trace(travelled);

    if (travelled == this.vanDistance) {
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
