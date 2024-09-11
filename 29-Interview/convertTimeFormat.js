const convert = (timeText) => {
  const timeTextLower = timeText.toLowerCase();
  const [hour, mins] = timeTextLower.split(":");

  if (timeTextLower.endWith("am")) {
    hour = hour === "12" ? "0" : hour;
  } else if (timeTextLower.endWith("pm")) {
    hour = hour === "12" ? hour : String(+hour + 12);
  }

  return hour.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
};
