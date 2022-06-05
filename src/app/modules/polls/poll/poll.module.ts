import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import {WalletService} from "../../../services/wallet/wallet.service";

@NgModule({
  declarations: [
    PollComponent
  ],
  imports: [
    CommonModule,
    PollRoutingModule
  ],
  providers: [
    WalletService
  ]
})
export class PollModule { }
