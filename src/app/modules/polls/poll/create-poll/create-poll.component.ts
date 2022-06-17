import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Moment} from "moment";
import {Store} from "@ngxs/store";
import {PollActions} from "@store/polls/poll.actions";
import CreatePoll = PollActions.CreatePoll;
import {Poll} from "@modules/polls/types/poll.type";

@Component({
  selector: 'ap-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  // @ViewChild(MatDatepicker) datepicker: MatDatepicker<Moment>;

  public metaData: string | null = null;

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
  ) {}

  ngOnInit(): void {
  }

  createPoll()
  {
    this.store.dispatch(new CreatePoll(this.createPollForm.value as Poll));
  }

}
