import BaseModel from "./baseModel";
export default class EventInfoModel extends BaseModel {
  constructor(args) {
    super(args);
    const { id, event_title, event_desc, event_location, event_location_desc, event_date, event_img, event_ticket, created_at, user_id, user_name, user_img } = args;
    this.id = id;
    this.event_title = event_title;
    this.event_desc = event_desc;
    this.event_location = event_location;
    this.event_location_desc = event_location_desc;
    this.event_date = event_date;
    this.event_img = event_img;
    this.event_ticket = event_ticket;
    this.created_at = created_at;
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_img = user_img;
  }
}

export const toEventSet = (arr) => {
  return arr.map((val) => {
    return new EventInfoModel(val);
  });
};


