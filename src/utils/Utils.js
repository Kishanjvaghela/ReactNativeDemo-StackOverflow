import { Date } from 'sugar-date';

export function convertRaputation(reputation) {

  if(reputation < 1000){
    return reputation;
  } else if (reputation < 10000) {
    return String(reputation).charAt(0) + "," + String(reputation).substr(1);
    // return reputation +"TT";
  } else {
    // return (Math.round((reputation / 1000) * 10) / 10) + "k";
    return Math.abs(Number(reputation)) >= 1.0e+9

    ? Math.abs(Number(reputation)) / 1.0e+9 + "B"
    // Six Zeroes for Millions
    : Math.abs(Number(reputation)) >= 1.0e+6

    ? Math.abs(Number(reputation)) / 1.0e+6 + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(reputation)) >= 1.0e+3

    ? Math.abs(Number(reputation)) / 1.0e+3 + "K"

    : Math.abs(Number(reputation));
  }
}

export function convertDate(dateInMillis) {
  let date = Date.create(dateInMillis);
  if(Date.isThisYear(date)){
    return Date.format(date, '%d %b at %R');
  }else {
    return Date.format(date, '%d %b %Y at %R');
  }
}
