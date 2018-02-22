import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    CandidateComponent,
    CandidateListComponent,
    UserProfileComponent
  ],
  exports: [
    CandidateComponent,
    CandidateListComponent,
    UserProfileComponent
  ]
})
export class ComponentsModule {}
