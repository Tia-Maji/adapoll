import { Injectable } from '@angular/core';
// import {Lucid, Blockfrost} from "lucid-cardano";
import {from, Observable, of} from "rxjs";

// declare global {
//   interface Window {
//     cardano: any;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // protected lucid: Observable<Lucid|null> = of(null);

  constructor() {
    // this.lucid.pipe(
    //
    // );
    // this.lucid = this.getLucid();
  }

  // protected getLucid(): Observable<Lucid>{
  //   //@todo get projectId from api via global store
  //   const promise = Lucid.new(
  //     new Blockfrost('https://cardano-testnet.blockfrost.io/api/v0', '<projectId>'),
  //     'Testnet'
  //   );
  //   return from(promise);
  // }

  // protected selectWallet(): Observable<any> {
  //   return from(window.cardano.nami.enable());
  //   // lucid.selectWallet(api);
  // }
}
