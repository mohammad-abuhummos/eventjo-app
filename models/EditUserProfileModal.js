import { isName, isValidEmail, isMatching, isPhone, isPresent } from "./helpers";
export default class EditUserProfileModal {
  constructor(
    Name,
    email,
    phone,
    address,
    dateOfBirth,
    gender
  ) {
    this.Name = Name;
    this.email = email;
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
    if (!isName(this.Name))
      errors_arr.push(
        "Full Name must be greater than 3 character and less than 12 character"
      );
    console.log("!isValidEmail(this.email)", this.email);
    if (!isValidEmail(this.email)) errors_arr.push("Invalid email");
    if (!isPhone(this.phone)) errors_arr.push("Phone number must be 10 number");
    if (!isPresent(this.dateOfBirth)) errors_arr.push("Invalid Date of birth");
    if (!isPresent(this.address)) errors_arr.push("Invalid Address");
    return errors_arr;
  }
}

export const toUserSet = (arr) => {
  return arr.map((val) => {
    return new userInfoModel(val);
  });
};
