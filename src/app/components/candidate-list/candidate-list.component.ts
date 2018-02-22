import {Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';

import { Candidate } from "../candidate/candidate";
import { AuthService } from '../../shared/services/auth.service';
import {MailService} from "../../shared/services/mail.service";

interface Vote {
  candidate: string;
  user: string;
}

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  private candidatesCollection: AngularFirestoreCollection<Candidate>;
  public candidates: Observable<Candidate[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService, private mail: MailService) {}

  ngOnInit() {
    this.candidatesCollection = this.afs.collection<Candidate>('candidates', ref => {
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
    const votesCollection = this.afs.collection<Vote>('votes');
    const {uid, email} = this.auth.currentUser;

    votesCollection.add({candidate, user: uid})
      .then(() => this.mail.send(email))
      .catch(err => console.log(err));
  }
}
