import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Candidate} from './candidate';
import { AuthService } from '../../shared/services/auth.service';
import { StateService} from '../../shared/services/state.service';

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  @Input('data') data: Candidate;
  @Output() candidateVoted = new EventEmitter<string>();

  isCollapsed: boolean = true;

  constructor(
    public auth: AuthService,
    public state: StateService
  ) {}

  voteCandidate(id: string) {
    this.candidateVoted.emit(id);
  }
}
