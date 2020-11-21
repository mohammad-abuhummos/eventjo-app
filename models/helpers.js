// import moment from "moment";
import BaseModel from "./baseModel";

export function isPresent(val) {
  if (Array.isArray(val)) {
    return !!val.length;
  }
  if (typeof val === "object" && val !== null) {
    return !isEmptyObject(val);
  }
  return !!val;
}

export function isPresentIn(val, options) {
  return options.includes(val);
}

const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export function isValidEmail(val) {
  return isPresent(val) && emailformat.test(val);
}

export function isMatching(val_1, val_2) {
  return isPresent(val_1) && isPresent(val_2) && val_1 === val_2;
}

export function isNumber(val) {
  return !isNaN(val);
}



// export function parseDate(date) {
//   if (!date) return null;
//   return moment(date);
// }

// export function isEmptyObject(obj) {
//   return !Object.keys(obj).length;
// }


// export function yearsOptions() {
//   return [...Array(50)].map((_, idx) => {
//     const year = moment()
//       .add(-18 - idx, "year")
//       .format("YYYY");
//     return toSelectOption(year, year);
//   });
// }

// export function monthsOptions() {
//   return moment
//     .langData()
//     .monthsShort()
//     .map((val, idx) => toSelectOption(val, idx));
// }

// export function daysOptions(momentDate) {
//   return [...Array((momentDate || moment()).daysInMonth()).keys()].map((val) =>
//     toSelectOption(val + 1, val + 1)
//   );
// }
