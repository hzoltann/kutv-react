import dayjs from "dayjs";

export function getRemainingTimeUnitMsTimeStamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const currentDaysjs = dayjs();

  return {
    seconds: getRemainingSeconds(currentDaysjs, timestampDayjs),
    minutes: getRemainingMinutes(currentDaysjs, timestampDayjs),
    hours: getRemainingHours(currentDaysjs, timestampDayjs),
    days: getRemainingDays(currentDaysjs, timestampDayjs),
  };
}

const getRemainingSeconds = (currentDaysjs, timestampDayjs) => {
  const seconds = timestampDayjs.diff(currentDaysjs, "seconds") % 60;
  return zeros(seconds, 2);
};
const getRemainingMinutes = (currentDaysjs, timestampDayjs) => {
  const minutes = timestampDayjs.diff(currentDaysjs, "minutes") % 60;
  return zeros(minutes, 2);
};
const getRemainingHours = (currentDaysjs, timestampDayjs) => {
  const hours = timestampDayjs.diff(currentDaysjs, "hours") % 24;
  return zeros(hours, 2);
};
const getRemainingDays = (currentDaysjs, timestampDayjs) => {
  const days = timestampDayjs.diff(currentDaysjs, "days");
  return days.toString();
};

const zeros = (number, minLength) => {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
};
