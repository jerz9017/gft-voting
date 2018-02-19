import { Component, Input } from '@angular/core';
import {Candidate} from "./candidate";

@Component({
  selector: 'candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent {
  @Input('data') data: Candidate;
}
