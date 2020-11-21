import BaseModel from "./baseModel";
export default class userInfoModel extends BaseModel {
  constructor(args) {
    super(args);
    const { fullName, emaill, dateOfBirth, password, profile_picture_url ,id,gender } = args;
    this.fullName = fullName;
    this.emaill = emaill;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.profile_picture_url = profile_picture_url;
    this.id = id;
    this.gender = gender;

  }

  requiredFields() {
    return ["fullName", "emaill", "dateOfBirth", "password","gender"];
  }
}

export const toUserSet = (arr) => {
  return arr.map((val) => {
    return new userInfoModel(val);
  });
};
