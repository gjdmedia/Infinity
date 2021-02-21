import { Component, OnInit,AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, VirtualTimeScheduler } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { PaintingDetailsModel } from './painting-details.model';
import { IonSlides, MenuController } from '@ionic/angular';
import { analytics } from 'firebase';
import { compileDirectiveFromRender2 } from '@angular/compiler/src/render3/view/compiler';


@Component({
  selector: 'app-painting-details',
  templateUrl: './painting-details.page.html',
  styleUrls: [
    './styles/painting-details.page.scss',
    './styles/painting-details.shell.scss'
  ]
  
})
export class PaintingDetailsPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  slidesOptions: any = {
    zoom: {
      toggle: false // Disable zooming to prevent weird double tap zomming on slide images
    }
  };

  
  subscriptions: Subscription;
  
  // Area
  side1: any;
  side2: any;
  side3: any;
  side4: any;
  totalArea: any;
  doorHeight:any;
  doorWidth:any;
  doorArea:any;
  totalReducedArea:any;

  // VAT
  costPaint: any;
  costCaulk: any;
  costBrushes: any;
  costTape: any;
  totalXVat: any;
  vat: any;
  totalIncVat: any;

  // Discount
  brushesCost:any;
  rollersCost:any;
  maskingCost:any;
  caulkCost:any;
  dropCost:any;
  discount: any;
  totalXDiscount: any;
  discountTotal: any;
  totalCost: any;

  //Labour
  labourPerHour:any;
  labourHours:any;
  totalLabourCost:any;

  //Triangle
  side1Tri: any;
  side2Tri: any;
  totalTri:any;

  //WallArea
  wallDepth:any;
  wallWidth:any;
  wallHeight:any;
  backLeft:any;
  backRight:any;
  frontLeft:any;
  frontRight:any;
  totalWallArea:any;

  //Paint Tins
  coverage:any;
  tinsCoverage:any;
  tinsNeeded:any;

  //Wallpaper
  wallSize:any;
  paperCost:any;
  rollCoverage:any;
  rollsRequired:any;
  rollsCost: any;


  details: PaintingDetailsModel;

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
    // Area
    this.side1 = Math.floor(Math.random() * 30) + 5; 
    this.side2 = this.side1 /2;
    this.doorHeight = this.side2*0.55;
    this.doorHeight = Math.round(this.doorHeight * 10) / 10;
    this.doorWidth = this.side1*0.75;
    this.doorWidth = Math.round(this.doorWidth * 10) / 10;


    // VAT
    this.costPaint = Math.floor(Math.random() * 200) + 15; 
    this.costCaulk = Math.floor(Math.random() * 15) + 2; 
    this.costBrushes = Math.floor(Math.random() * 20) + 10; 
    this.costTape = Math.floor(Math.random() * 10) + 1; 

    // Discount
    this.brushesCost = Math.floor(Math.random() * 20) + 10; 
    this.maskingCost = Math.floor(Math.random() * 10) + 1; 
    this.rollersCost = Math.floor(Math.random() * 20) + 1; 
    this.caulkCost = Math.floor(Math.random() * 15) + 2; 
    this.dropCost = Math.floor(Math.random() * 100) + 10; 
  
    this.discount = Array(5,10,15,20,25,30,35,40,45,50);
    this.discount = this.discount[Math.floor(Math.random() * this.discount.length)];

    //Labour
    this.labourPerHour = Math.floor(Math.random() * 30) + 10; 
    this.labourHours = Math.floor(Math.random() * 80) + 10; 

    //Triangle
    this.side2Tri = Math.floor(Math.random() * 30) + 5; 
    this.side1Tri = this.side2Tri /2;

    //Wall Area
    this.wallWidth = Math.floor(Math.random() * 6) + 6; 
    this.wallDepth = this.wallWidth*0.65;
    this.wallDepth = Math.round(this.wallDepth * 10) / 10;
    this.wallHeight = 2.5;

    //Paint Tins
    this.coverage = Math.floor(Math.random() * 300) + 100; 
    this.tinsCoverage = Math.floor(Math.random() * 10) + 10; 

    //Wallpaper
    this.wallSize = Math.floor(Math.random() * 40) + 10; 
    var precision = 100; // 2 decimals
    this.paperCost = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
    this.rollCoverage = 5.35;
  }
 


  ngOnInit(): void {

    

    // On init, the route subscription is the active subscription
    this.subscriptions = this.route.data
    .subscribe(
      (resolvedRouteData: IResolvedRouteData<PaintingDetailsModel>) => {
        // Route subscription resolved, now the active subscription is the Observable extracted from the resolved route data
        this.subscriptions = ResolverHelper.extractData<PaintingDetailsModel>(resolvedRouteData.data, PaintingDetailsModel)
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
           this.totalArea=""
           this.totalXVat = "";
            this.totalIncVat= "";
            this.vat = "";
            this.totalXDiscount="";
            this.discountTotal="";
            this.totalCost="";
            this.totalLabourCost="";
            this.totalTri="";
            this.doorArea="";
            this.totalReducedArea="";
            this.tinsNeeded="";
            this.rollsRequired="";
            this.rollsCost="";
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

  

  calculateSimpleArea():void {

    

    if (this.totalArea == this.side1*this.side2) {
    console.trace('Correct!');

     this.presentToastCorrect();
     
      
    } else {

      this.presentToastIncorrect();
    }
    
  }

  calculateAdvancedArea():void {

    var wallArea = this.side1 * this.side2;
    var doorArea = this.doorWidth * this.doorHeight;

    if (wallArea == this.totalArea && doorArea == this.doorArea && this.totalReducedArea == wallArea - doorArea) {
      console.trace('Correct!');
  
       this.presentToastCorrect();
       
        
      } else {
  
        this.presentToastIncorrect();
      }


  }

  calculateSimpleVAT():void {

    var vatAmount = (this.costPaint + this.costCaulk+this.costBrushes+this.costTape) * 0.2
    console.trace(vatAmount)

    if (this.costPaint + this.costCaulk+this.costBrushes+this.costTape+ vatAmount == this.totalIncVat)  {
      console.trace('Correct!');
  
       this.presentToastCorrect();
       
        
      } else {
  
        this.presentToastIncorrect();
      }
      
    }

    calculateDiscount():void {

         
      var subTotal = this.brushesCost+this.rollersCost+this.maskingCost+this.caulkCost+this.dropCost;
      var discAmount = Math.round(subTotal * (this.discount / 100) * 100) / 100 ;
      

      console.trace("Subtotal = " + subTotal + "Discount = " + discAmount)

      if (this.totalCost == subTotal - discAmount)  {
        console.trace('Correct!');
    
         this.presentToastCorrect();
         
          
        } else {
    
          this.presentToastIncorrect();
        }
        
      }

      calculateLabour():void{

        if (this.totalLabourCost == this.labourPerHour * this.labourHours)  {
          console.trace('Correct!');
      
           this.presentToastCorrect();
           
            
          } else {
      
            this.presentToastIncorrect();
          }
          
        }

        calculateSimpleTri():void{

          if (this.totalTri == (this.side2Tri / 2) * this.side1Tri)  {
            console.trace('Correct!');
        
             this.presentToastCorrect();
             
              
            } else {
        
              this.presentToastIncorrect();
            }
            
          }


          calculateTins():void{

            var volumeRounded = Math.ceil(this.coverage / this.tinsCoverage);
            console.trace(volumeRounded);
            if (this.tinsNeeded == volumeRounded)  {
              console.trace('Correct!');
          
               this.presentToastCorrect();
               
                
              } else {
          
                this.presentToastIncorrect();
              }
              
            }
            calculateWallpaper():void{

              var rollsRounded = Math.round(this.wallSize / this.rollCoverage * 10) / 10 ;
              var rollsCostRounded = Math.round(this.paperCost * this.rollsRequired * 10) / 10 ;
              console.trace(rollsRounded);
              console.trace(rollsCostRounded)
              if (this.rollsRequired == rollsRounded && this.rollsCost == rollsCostRounded)  {
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
