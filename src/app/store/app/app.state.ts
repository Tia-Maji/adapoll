import { Injectable } from '@angular/core';
import {Action, State, StateContext, StateToken} from '@ngxs/store';
import {PollActions} from "@store/polls/poll.actions";
import CreatePoll = PollActions.CreatePoll;
import {AppActions} from "@store/app/app.actions";
import Login = AppActions.Login;

const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');

export interface AppStateModel {
  user: any|null;
}

@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: {
    user: null
  }
})

@Injectable()
export class AppState {
  @Action(Login)
  createPoll(ctx: StateContext<AppStateModel>, action: Login)
  {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: action.user
    })
  }
}
