export const validateField = (arr, data) => {
  let msg;
  for (let i = 0; i < arr.length; i++) {
    if (!data[arr[i]]) {
      msg = arr[i] + ' is required';
      break;
    }
  }
  return msg;
};
