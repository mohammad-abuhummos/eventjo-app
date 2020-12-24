import { isPhone, isPresent } from "./helpers";
export default class CompleteSignUpModel {
  constructor( phone, address, dateOfBirth, gender) {
    this.phone = phone;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
  }
  isValid() {
    return this.errors().length === 0;
  }
  errors() {
    let errors_arr = [];
    if (!isPhone(this.phone)) errors_arr.push("Phone number must be 10 number");
    if (!isPresent(this.dateOfBirth)) errors_arr.push("Invalid Date of birth");
    if (!isPresent(this.address)) errors_arr.push("Invalid Address");
    return errors_arr;
  }
}

export const toUserSet = (arr) => {
  return arr.map((val) => {
    return new CompleteSignUpModel(val);
  });
};
