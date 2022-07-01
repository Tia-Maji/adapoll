import { Injectable } from '@angular/core';
import {Action, Selector, State, StateContext, StateToken} from '@ngxs/store';
import {Poll} from "@modules/polls/types/poll.type";
import {PollActions} from "@store/polls/poll.actions";
import CreatePoll = PollActions.CreatePoll;
import {FormControlStatus, FormGroup} from "@angular/forms";
import {Moment} from "moment";

const POLL_STATE_TOKEN = new StateToken<PollStateModel>('poll');

export interface PollFormModel {
  description?: string;
  endDate?: Moment|Date;
  endTime?: string;
  name?: string;
  startDate?: Moment|Date;
  startTime?: string;
  website?: string;
}

export interface PollStateModel {
  poll: Poll|null;
  createPollForm: {
    dirty: boolean;
    errors: any;
    model?: PollFormModel;
    status: FormControlStatus;
  }|null;
}

@State<PollStateModel>({
  name: POLL_STATE_TOKEN,
  defaults: {
    poll: null,
    createPollForm: {
      dirty: false,
      errors: {},
      status: 'VALID',
    }
  }
})

@Injectable()
export class PollState {
  @Selector()
  static poll(state: PollStateModel) {
    return state.poll;
  }

  @Selector()
  static metaData(state: PollStateModel) {
    if (!state.poll) {
      return;
    }
    return state.poll;
  }

  @Action(CreatePoll)
  createPoll(ctx: StateContext<PollStateModel>, action: CreatePoll)
  {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      poll: state.createPollForm?.model as Poll
    });
  }
}
