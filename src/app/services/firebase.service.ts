import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Students/';

  constructor(  private firestore: AngularFirestore) { }


  create_student(record, id) {
    return this.firestore.collection(this.collectionName).doc(id).set(record);
  }

  read_students(id) {

    console.trace("Reading Student Data..." + id);

    var docRef = this.firestore.collection("Students/").doc(id);
    console.trace("DocRef : " + docRef);

    docRef.get().subscribe(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        // this.name = doc.data()['Name']
        // this.email = doc.data()['Email'],
        // this.tutor = doc.data()['Tutor'],
        // this.course = doc.data()['Course'],
        
        return doc.data();

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    
  }

  update_student(recordID, record) {
    this.firestore.doc(this.collectionName+recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.doc(this.collectionName + record_id).delete();
  }


}
