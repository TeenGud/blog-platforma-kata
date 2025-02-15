export const formatTime = (time: string) => {
  const date = time.slice(0, 10);
  const [year, monthNumber, day] = date.split('-');
  let month = monthNumber;
  switch (month) {
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';
      break;
    case '09':
      month = 'September';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
    default:
      break;
  }
  if (day[0] === '0') {
    return `${month} ${day[1]}, ${year}`;
  } else {
    return `${month} ${day}, ${year}`;
  }
};
