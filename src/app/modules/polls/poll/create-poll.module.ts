import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WalletService} from "@services/wallet/wallet.service";
import {CreatePollComponent} from "@modules/polls/poll/create-poll/create-poll.component";
import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {MatInputModule} from "@angular/material/input";
import {HighlightModule} from "ngx-highlightjs";
import {NgxsModule} from "@ngxs/store";
import {PollState} from "@store/polls/poll.state";

@NgModule({
  declarations: [
    CreatePollComponent
  ],
  imports: [
    CommonModule,

    FormsModule,

    HighlightModule,

    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxsModule.forFeature([
      PollState
    ]),

    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: CreatePollComponent
      },
    ]),
  ],
  exports: [
    CreatePollComponent
  ],
  providers: [
    // WalletService
  ]
})
export class CreatePollModule { }
