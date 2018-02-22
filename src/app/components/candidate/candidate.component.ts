import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Candidate} from "./candidate";

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  @Input('data') data: Candidate;
  @Output() candidateVoted = new EventEmitter<string>();

  voteCandidate(id: string) {
    this.candidateVoted.emit(id);
  }
}
