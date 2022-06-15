import {Moment} from "moment";

export interface Poll {
  description: string | null;
  endDate: Moment | null;
  endTime: string | null;
  uuid: string | null;
  name: string;
  startDate: Moment | null;
  startTime:string | null;
}
