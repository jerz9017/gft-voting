import { Component } from '@angular/core';
import { Candidate } from "../candidate/candidate";

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent {
  candidates: Candidate[];

  constructor() {
    this.candidates = [
      new Candidate('Elon Musk', 'Space X - Tesla, Inc. - Neuralink', 46,  'https://ei.marketwatch.com/Multimedia/2017/05/24/Photos/ZH/MW-FN186_musk_0_20170524133537_ZH.jpg?uuid=665eca18-40a7-11e7-a789-9c8e992d421e'),
      new Candidate('Leia Organa', 'Rebel Alliance', 60, 'http://media.comicbook.com/2017/06/carrie-fisher-official-cause-death-autopsy-1003206.jpg'),
      new Candidate('Doctor Emmett Lathrop "Doc" Brown', 'DeLorean Time Machine, Inc.', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_9M6UYIFHrNCGPe0Ixp312uaa_nFFT4qKgVRVv7jn37VmJjc')
    ];
  }
}
