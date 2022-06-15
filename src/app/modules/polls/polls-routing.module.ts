import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PollsComponent} from "@modules/polls/polls/polls.component";

const routes: Routes = [
  {
    path: '',
    component: PollsComponent,
    pathMatch: 'full',
    // @todo could not get nested lazy routes to load
    // children: [
    //   {
    //     path: '',
    //     pathMatch: "full",
    //     loadChildren: () => import('@modules/polls/poll/poll.module').then(m => m.PollModule)
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollsRoutingModule { }
