/** @format */

import moment from "moment";

const convertDate = (date) => {
  if (!date) {
    return null;
  }
  return moment(date).format("MMMM D, [at] YYY h:mm a");
};

export const helperService = {
  convertDate,
};
