import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WalletService} from "@services/wallet/wallet.service";
import {CreatePollComponent} from "@modules/polls/poll/create-poll/create-poll.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightModule} from "ngx-highlightjs";
import {NgxsModule} from "@ngxs/store";
import {PollState} from "@store/polls/poll.state";
import {CalendarModule} from "primeng/calendar";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";

@NgModule({
  declarations: [
    CreatePollComponent
  ],
  imports: [
    CommonModule,

    FormsModule,

    HighlightModule,

    NgxsModule.forFeature([
      PollState
    ]),
    NgxsFormPluginModule,

    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CreatePollComponent
      },
    ]),
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
  ],
  exports: [
    CreatePollComponent
  ],
  providers: [
    // WalletService
  ]
})
export class CreatePollModule { }
