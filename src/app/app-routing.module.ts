import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundModule} from "@modules/not-found/not-found.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'polls',
    loadChildren: () => import('@modules/polls/polls.module').then(m => m.PollsModule)
  },
  {
    path: 'polls/create',
    pathMatch: "full",
    loadChildren: () => import('@modules/polls/poll/create-poll.module').then(m => m.CreatePollModule)
  },
  {
    path: 'polls/:poll',
    pathMatch: "full",
    loadChildren: () => import('@modules/polls/poll/poll.module').then(m => m.PollModule)
  },
  {
    path: '**',
    component: NotFoundModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
