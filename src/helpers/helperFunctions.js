export function convertCount(number) {
  if (number >= 1000 && number <= 1000000) {
    return Math.round(number / 1000) + "K";
  } else if (number >= 1000000) {
    return Math.round(number / 1000000) + "M";
  } else {
    return number;
  }
}
