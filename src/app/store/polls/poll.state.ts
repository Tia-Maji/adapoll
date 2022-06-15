import { Injectable } from '@angular/core';
import {Action, State, StateContext, StateToken} from '@ngxs/store';
import {Poll} from "@modules/polls/types/poll.type";
import {PollActions} from "@store/polls/poll.actions";
import CreatePoll = PollActions.CreatePoll;

const POLL_STATE_TOKEN = new StateToken<PollStateModel>('poll');

export interface PollStateModel {
  poll: Poll|null;
}

@State<PollStateModel>({
  name: POLL_STATE_TOKEN,
  defaults: {
    poll: null
  }
})

@Injectable()
export class PollState {
  @Action(CreatePoll)
  createPoll(ctx: StateContext<PollStateModel>, action: CreatePoll)
  {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      poll: action.poll
    })
  }
}
