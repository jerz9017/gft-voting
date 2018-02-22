import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Candidate} from "./candidate";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input('data') data: Candidate;
  @Output() candidateVoted = new EventEmitter<string>();

  voteEnabled: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(({voted = false}) => {
      this.voteEnabled = !voted;
    });
  }

  voteCandidate(id: string) {
    this.candidateVoted.emit(id);
  }
}
