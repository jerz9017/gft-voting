import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Candidate } from "../candidate/candidate";

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  candidates: Observable<Candidate[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.candidates = this.getCandidates('/candidates');
  }

  getCandidates(path: string): Observable<Candidate[]> {
    return this.db.list<any>(path).valueChanges()
      .map(changes => changes
        .map(c => new Candidate(
          c.name,
          c.party,
          c.age,
          c.photoURL
        ))
      );
  }
}
