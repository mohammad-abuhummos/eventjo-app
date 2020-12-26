import { isPresent,isPresentValid } from "./helpers";
export default class EventInfoModel {
  constructor(
    event_title,
    event_desc,
    event_location_desc,
    event_date,
    event_ticket,
    event_ticket_vol,
    event_img
  ) {
    this.event_title = event_title;
    this.event_desc = event_desc;
    this.event_location_desc = event_location_desc;
    this.event_date = event_date;
    this.event_ticket = event_ticket;
    this.event_ticket_vol = event_ticket_vol;
    this.event_img = event_img;
  }
  isValid() {
    return this.errors().length === 0;
  }
  errors() {
    let errors_arr = [];
    if (!isPresent(this.event_title)) errors_arr.push("Event must have title");
    if (!isPresent(this.event_desc))
    if (!isPresentValid(this.event_location_desc))
      errors_arr.push("Event must have description location");
    if (!isPresent(this.event_date)) errors_arr.push("Event must have date");
    if (!isPresent(this.event_ticket)) errors_arr.push("Event must have seats number");
    return errors_arr;
  }
}

export const toEventSet = (arr) => {
  return arr.map((val) => {
    return new EventInfoModel(val);
  });
};
