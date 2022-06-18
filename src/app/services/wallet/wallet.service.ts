// @ts-nocheck
import { Injectable } from '@angular/core';
import {Lucid, Blockfrost, Tx, RewardAddress} from "lucid-cardano";
import {concatMap, first, from, map, Observable, of, switchMap, take, tap} from "rxjs";

declare global {
  interface Window {
    cardano: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // public lucid: Lucid|null;

  constructor() {}

  public async stake(poolId): Observable<Lucid>
  {
    const lucid = await this.getLucid();
    const tx = await lucid?.newTx();
    console.log(await lucid?.wallet.getUtxos());
    return from(100);
    // return from(tx.delegateTo(await lucid?.wallet.rewardAddress(), poolId));
  }

  protected async getLucid(): Lucid {
    //@todo get projectId from api via global store
    const lucid = await Lucid.new(
      new Blockfrost('https://cardano-testnet.blockfrost.io/api/v0', 'testnetl6uurHYU7hczp2ryNz2eVkjPp89rKCNC'),
      'Testnet'
    );
    lucid.selectWallet(await this.enableWalletConnector());

    return lucid;
  }

  protected async enableWalletConnector() {
    return await window.cardano.nami.enable();
  }

}
