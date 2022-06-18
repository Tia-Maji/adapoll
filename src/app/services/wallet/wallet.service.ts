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

  public async stake(poolId): Observable<any>
  {
    try {
      const lucid = await this.getLucid();
      const tx = await lucid?.
      newTx().
      delegateTo(await lucid?.wallet.rewardAddress(), poolId).complete();

      const signedTx = await tx.sign().complete();
      const txHash = await signedTx.submit();
      return of(txHash);
    } catch (e) {
      console.log(e);
    }

    return of(false);
  }

  public async getAdaBalance()
  {
    const lucid = await this.getLucid();
    return from(lucid?.wallet.getUtxos());
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
