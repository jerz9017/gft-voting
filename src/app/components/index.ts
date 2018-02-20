import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CandidateComponent,
    CandidateListComponent
  ],
  exports: [
    CandidateComponent,
    CandidateListComponent
  ],
  providers: []
})
export class ComponentsModule {}
