import { Component } from '@angular/core';
import {WalletService} from "@services/wallet/wallet.service";
import {first, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adapoll';

  constructor(protected walletService: WalletService) {
  }

  connectWallet()
  {
    this.walletService.stake('pool1h7quxt2t35z48pp3wsceqssmtc8uywzvvpwzmha74w7458y4hpy').pipe(take(1));
  }
}
