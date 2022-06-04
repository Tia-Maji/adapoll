import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PollComponent} from "@modules/polls/poll/poll.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PollComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
