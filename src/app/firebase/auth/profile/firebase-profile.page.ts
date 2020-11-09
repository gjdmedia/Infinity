import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseProfileModel } from './firebase-profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { Observable, Subscription } from 'rxjs';
import { IResolvedRouteData, ResolverHelper } from '../../../utils/resolver-helper';

//Import AngularFirestore to make Queries.
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { FirebaseService } from '../../../services/firebase.service'
import { analytics } from 'firebase';
import { trace } from 'console';
import * as firebase from 'firebase';

interface StudentData {
  Name: String; Email: String; id: String; Course: String; Tutor: String;
}



@Component({
  selector: 'app-firebase-profile',
  templateUrl: './firebase-profile.page.html',
  styleUrls: [
    './styles/firebase-profile.page.scss',
    './styles/firebase-profile.shell.scss'
  ]
})
export class FirebaseProfilePage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;
  eventService: any;
  events: any;
  docRef: any;
  user: FirebaseProfileModel;
  name: any;
  email: any;
  tutor: any;
  course: any;
  studentData: StudentData;
  studentList = [];
  data: Observable<StudentData>;

  @HostBinding('class.is-shell') get isShell() {
    return (this.user && this.user.isShell) ? true : false;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: FirebaseAuthService,
    private firebaseService: FirebaseService,
    private db: AngularFirestore,
  ) { this.studentData = {} as StudentData; }

  ngOnInit() {

    var user = this.authService.currentUser;


    if (user) {

      console.trace(user.uid);
      // console.trace("Good End : " + this.firebaseService.read_students(user.uid));
      this.showData();



    } else {
      // No user is signed in.
      console.trace("Sign in!");
      this.router.navigate(['firebase/auth/sign-in'], { replaceUrl: true });
    }


  }

  async showData() {
    const db = firebase.firestore();
    const docRef = db.collection('Students/').doc(this.authService.currentUser.uid);
    // tslint:disable-next-line:member-ordering
    docRef.get().then((doc) => {
      const details = doc.data();

      if (doc.exists) {
        console.log('Document data:', doc.data());
        this.name = doc.data()['Name']
        this.email = doc.data()['Email'],
          this.tutor = doc.data()['Tutor'],
          this.course = doc.data()['Course']
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }


  updateProfilePage() {



    this.studentData.Name = this.name;
    this.studentData.Email = this.email;
    this.studentData.Tutor = this.tutor;
    this.studentData.Course = this.course;

    console.log("Updated " + this.studentData);
    this.firebaseService.create_student(this.studentData, this.authService.currentUser.uid).then(resp => {

    })
      .catch(error => {
        console.log(error);
      });


  }

  deleteAccount() {

    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      // User deleted.
      this.FirebaseService.delete_student(user);
     
    }).catch(function(error) {
      // An error happened.
    });

    this.signOut();
  }


  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      // Replace state as we are no longer authorized to access profile page.
      this.router.navigate(['firebase/auth/sign-in'], { replaceUrl: true });
    }, (error) => {
      console.log('signout error', error);
    });
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
