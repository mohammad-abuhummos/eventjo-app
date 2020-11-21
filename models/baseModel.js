import {
  humanizeString,
  isEmptyObject,
  isNumber,
  isPresent,
  
} from "./helpers";
export default class BaseModel {
  constructor({ id, created_at, updated_at }) {
    this.id = id;
    // this.created_at = parseDate(created_at);
    // this.updated_at = parseDate(updated_at);
  }

  isValid() {
    return isEmptyObject(this.errors());
  }

  persistant() {
    return isPresent(this.id);
  }

  // errors() {
  //   let _errors = {};
  //   const _requiredFields = this.requiredFields();
  //   const _requiredNumericFields = this.requiredNumericFields();
  //   const _requiredRelations = this.requiredRelations();
  //   if (!!_requiredFields.length) {
  //     _requiredFields.forEach((element) => {
  //       if (!isPresent(this[element])) {
  //         _errors[element] = `${element} can't be blank`;
  //       }
  //     });
  //   }
  //   if (!!_requiredNumericFields.length) {
  //     _requiredNumericFields.forEach((element) => {
  //       if (!isNumber(this[element])) {
  //         _errors[element] = `${element} should be a valid number`;
  //       }
  //     });
  //   }
  //   if (!!_requiredRelations.length) {
  //     _requiredRelations.forEach((element) => {
  //       if (!(!!this[element].isValid && this[element].isValid())) {
  //         _errors[element] = `${element} should be present`;
  //       }
  //     });
  //   }
  //   return _errors;
  // }

  requiredFields() {
    return [];
  }

  requiredNumericFields() {
    return [];
  }

  requiredRelations() {
    return [];
  }

  toRequestObject() {
    return {};
  }
}
