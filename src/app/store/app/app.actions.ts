import {Poll} from "@modules/polls/types/poll.type";

export namespace AppActions {
  export class Login {
    static readonly type = '[User] Login';

    constructor(public user: any) {
    }
  }

  export class Logout {
    static readonly type = '[User] Logout';

    constructor(public user: any) {
    }
  }
}
