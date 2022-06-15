import {Poll} from "@modules/polls/types/poll.type";
export namespace PollActions {
  export class CreatePoll {
    static readonly type = '[Polls] Create Poll';

    constructor(public poll: Poll) {
    }
  }

  export class UpdatePoll {
    static readonly type = '[Polls] Update Poll';

    constructor(public poll: Poll) {
    }
  }
}
