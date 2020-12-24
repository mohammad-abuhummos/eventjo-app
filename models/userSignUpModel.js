import {isName, isValidEmail, isMatching} from './helpers';
export default class userSignUpModel  {
  constructor( Name, email, password, password_confirmation) {
    this.Name = Name;
    this.email = email;
    this.password = password;
    this.password_confirmation = password_confirmation;
  }
  isValid() {
    return this.errors().length === 0;
  }

  errors() {
    let errors_arr = [];
    if (!isName(this.Name))
    errors_arr.push(
      'Full Name must be greater than 3 character and less than 12 character',
    );
    console.log("!isValidEmail(this.email)",this.email)
    if (!isValidEmail(this.email)) errors_arr.push('Invalid email');
    if (!isMatching(this.password, this.password_confirmation))
      errors_arr.push('Password is not valid');
    return errors_arr;
  }
}


export const toUserSet = (arr) => {
  return arr.map((val) => {
    return new userInfoModel(val);
  });
};
