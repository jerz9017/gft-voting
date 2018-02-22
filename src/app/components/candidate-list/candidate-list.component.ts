import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Candidate } from "../candidate/candidate";

interface Vote { candidate: string; username?: string; }

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  private candidatesCollection: AngularFirestoreCollection<Candidate>;
  candidates: Observable<Candidate[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.candidatesCollection = this.db.collection<Candidate>('candidates', ref => {
      return ref.orderBy('name');
    });
    this.candidates = this.getCandidates(this.candidatesCollection);
  }

  getCandidates(collection: AngularFirestoreCollection<Candidate>) {
    return collection.snapshotChanges()
      .map(actions => actions
        .map(({payload}) => {
          const id = payload.doc.id;
          const {name, party, age, photoUrl} = payload.doc.data();

          return new Candidate(id, name, party, age, photoUrl);
        })
      );
  }

  voteCandidate(candidate: string) {
    const votesCollection = this.db.collection<Vote>('votes');

    votesCollection.add({candidate})
      .then(() => console.log('Vote Emitted!!!'))
      .catch(err => console.log(err));
  }
}
