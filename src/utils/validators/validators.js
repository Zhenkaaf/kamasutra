/* export const required = value => {
    if (value) {
        return undefined;
    }
    return "Field is required";
}

export const maxLengthCreator = (maxLength) => value => {
    if (value.length > 30) {
        return 'Max length is 30 symbols';
    }
    return undefined;
} */
export const maxLengthCreator = (maxLength) => (value) => {
    console.log(value);
    if (!value) {
      return "Field is required";
    }
    else if (value.length > maxLength) {
      console.log('require work');
      return `Max length is ${maxLength} symbols`;
    }
    return undefined;
  }