import { Component, OnInit,AfterViewInit, ViewChild, HostBinding } from '@angular/core';
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
  side3a: any;
  side4a: any;
  side5a: any;
  side6a: any;
  spindleThickness: any;
  spindlesNeeded: any;
  spindleSpace: any;
  newelDistance: any;
  joistLength: any;
  rotAmount: any;
  joistReplacement: any;
  total: any;
  totala: any;
  totalArea: any;
  totalTins: any;
  costTimber: any;
  costDelivery: any;
  totalXVat: any;
  vat: any;
  totalIncVat: any;
  totalPlasterArea: any;
  totalPlasterAreaDoubled: any;
  plasterCoverage: any;
  numberOfBoards: any;
  timberCost: any;
  screwsCost: any;
  plugsCost: any;
  discount: any;
  totalXDiscount: any;
  discountTotal: any;
  totalCost: any;
  numerator: any;
  denominator: any;
  radius: any;
  diameter: any;
  circumference: any;


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

  generateSides():void {
    this.side1 = Math.floor(Math.random() * 30) + 5; 
    this.side2 = this.side1 /2;
    console.trace('Random: ', this.side1)

    this.side1a = Math.floor(Math.random() * 30) + 5; 
    this.side2a = this.side1a * 0.384615385;
    this.side2a = Math.round(this.side2a * 10) / 10;

    this.side5a = this.side1 * 0.57;
    this.side5a = Math.round(this.side5a * 10) / 10;

    this.side6a = this.side1 * 0.615;
    this.side6a = Math.round(this.side6a * 10) / 10;

    this.spindleThickness = Math.floor(Math.random() * 35) + 30; 
    this.newelDistance = Math.floor(Math.random() * 4000) + 3000; 

    this.costTimber = Math.floor(Math.random() * 500) + 30; 
    this.costDelivery = Math.floor(Math.random() * 20) + 5; 

    this.plasterCoverage = 2.88;

    this.timberCost = Math.floor(Math.random() * 400) + 100; 
    this.screwsCost = Math.floor(Math.random() * 100) + 10; 
    this.plugsCost = Math.floor(Math.random() * 100) + 10; 
    this.discount = Math.floor(Math.random() * 35) + 20; 

    this.joistLength = Math.floor(Math.random() * 15) + 2; 
    this.numerator = Math.floor(Math.random() * 3) + 1; 
    this.denominator = Math.floor(Math.random() * 8) + 4; 
    this.rotAmount = this.numerator + " / " + this.denominator;

    this.radius = Math.floor(Math.random() * 300) + 10; 



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
            this.details = state;
          },
          (error) => {}
        );
      },
      (error) => {}
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
            this.side3a = "";
            this.side4a = "";
            this.total = "";
            this.totala = "";
            this.totalArea = "";
            this.totalTins = "";
            this.totalXVat = "";
            this.totalIncVat= "";
            this.vat = "";
            this.numberOfBoards = "";
            this.totalPlasterArea = "";
            this.totalPlasterAreaDoubled = "";
            this.totalXDiscount = "";
            this.discountTotal = "";
            this.totalCost = "";
            this.joistReplacement = "";
            this.diameter = "";
            this.circumference = "";
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

  calculateComplexArea():void {

    

    if (this.totalArea == (this.side1a*this.side2a)+(this.side4a*this.side5a)) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateAdvanced():void {

    

    if (this.totala == this.side1a+this.side1a+this.side6a+this.side6a) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateSpindles():void {

    

    if (this.spindlesNeeded = this.newelDistance/(this.spindleThickness+100)) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateSimplePaint():void {

    var tinsRequired = Math.round((this.totalArea / 22) * 10) / 10;
    console.trace(tinsRequired)

    if (this.totalArea == this.side1*this.side2 && tinsRequired == this.totalTins)  {
      console.trace('Correct!');
  
       this.presentToastCorrect();
       
        
      } else {
  
        this.presentToastIncorrect();
      }
      
    }

    calculateSimpleTimber():void {

      var vatAmount = (this.costTimber + this.costDelivery) * 0.2
      console.trace(vatAmount)
  
      if (this.costTimber+this.costDelivery+ vatAmount == this.totalIncVat)  {
        console.trace('Correct!');
    
         this.presentToastCorrect();
         
          
        } else {
    
          this.presentToastIncorrect();
        }
        
      }

      calculatePlasteboard():void {

        var requiredBoards = Math.round((this.totalPlasterAreaDoubled / 2.88) * 10) / 10;


        if (this.totalPlasterAreaDoubled  == (this.side2*this.side1)*2 && this.numberOfBoards == requiredBoards )  {
          console.trace('Correct!');
      
           this.presentToastCorrect();
           
            
          } else {
      
            this.presentToastIncorrect();
          }
          
        }

        calculateDiscount():void {

         
          var subTotal = this.timberCost+this.plugsCost+this.screwsCost;
          var discAmount = subTotal * (this.discount / 100);

          console.trace("Subtotal = " + subTotal + "Discount = " + discAmount)

          if (this.totalCost == subTotal - discAmount)  {
            console.trace('Correct!');
        
             this.presentToastCorrect();
             
              
            } else {
        
              this.presentToastIncorrect();
            }
            
          }

          calculateJoist():void {

            var rotLevel = Math.round((this.joistLength * this.numerator / this.denominator) * 10) / 10;
            console.trace(rotLevel + " & " + this.joistReplacement)
            
            if (rotLevel == this.joistReplacement)  {
              console.trace('Correct!');
          
               this.presentToastCorrect();
               
                
              } else {
          
                this.presentToastIncorrect();
              }
              
            }

            calculateCircumference():void {

              var checkDiameter = Math.round((this.radius * 2) * 10) / 10;
              var pi = Math.round((this.diameter * 3.14159265359) * 10) / 10;

              console.trace(checkDiameter + " & " + this.diameter + " Pi " + pi)
              
              if (checkDiameter == this.diameter && this.circumference == pi)  {
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
