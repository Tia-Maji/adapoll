import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PollComponent} from "@modules/polls/poll/poll.component";
import {CreatePollComponent} from "@modules/polls/poll/create-poll/create-poll.component";

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: PollComponent,
    // @todo could not get nested routes to work
    // children: [
    //   {
    //     path: ':poll',
    //     // pathMatch: 'full',
    //     component: PollComponent
    //   },
    //   {
    //     path: 'create',
    //     // pathMatch: 'full',
    //     component: CreatePollComponent
    //   },
    // ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
