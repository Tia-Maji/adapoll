import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Moment} from "moment";
import {Select, Store} from "@ngxs/store";
import {Poll} from "@modules/polls/types/poll.type";
import {PollActions} from "@store/polls/poll.actions";
import CreatePoll = PollActions.CreatePoll;
import {Observable, take} from "rxjs";
import {ResetForm, SetFormDisabled, SetFormEnabled, UpdateFormDirty} from "@ngxs/form-plugin";
import {PollState} from "@store/polls/poll.state";

@Component({
  selector: 'ap-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Moment>;

  @Select(PollState.poll) poll$: Observable<Poll>;
  @Select(PollState.metaData) metaDAta$: Observable<string>;

  public createPollForm = new FormGroup({
    description: new FormControl<string | null>(null),
    endDate: new FormControl<Moment | null>(null),
    endTime: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    startDate: new FormControl<Moment | null>(null),
    startTime: new FormControl<string | null>(null),
    website: new FormControl<string | null>(null),
  });

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    // this.createPoll();
    this.store.dispatch(new SetFormEnabled('poll.createPollForm'));
  }

  createPoll() {
    this.store
      .dispatch(new CreatePoll())
      // .pipe(take(1))
      // .subscribe(() => this.store.dispatch(
      //   new SetFormDisabled('poll.createPollForm')
      // ));
  }

}
