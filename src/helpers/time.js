const getPossibleTimes = (date, arr, duration) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let d1 = new Date(year, month, day, 9, 0, 0);
  let d2 = new Date(year, month, day, 19, 0, 0);
  //numbre of possible dates between 9am and 7pm
  let nbrPossibleTimes = (d2 - d1) / 1000 / 60 / 15;
  //array of all possible times between 9am and 7pm
  let allTimes = [];
  //duration to int and nbr of 15 mins in it
  let durationParsed = parseInt(duration) / 15;
  //excluded times array
  let excludedArray = [...arr, 39];
  //excludedTimes
  let excluded = [];
  //possible dates array
  let possibleDates = [];

  for (let i = 0; i < nbrPossibleTimes; i++) {
    allTimes.push([
      new Date(d1.getTime() + i * 15 * 60 * 1000),
      new Date(d1.getTime() + (i + 1) * 15 * 60 * 1000),
    ]);
  }

  for (let i = 0; i < excludedArray.length; i++) {
    for (let j = durationParsed - 1; j > 0; j--) {
      if (excludedArray[i] - j >= 0) {
        excluded.push(excludedArray[i] - j);
        excluded.push(excludedArray[i]);
      } else {
        excluded.push(excludedArray[i]);
      }
    }
  }

  let finalExcluded = [...new Set(excluded)].sort((a, b) => a - b);

  console.log(finalExcluded);
  console.log("===============================");
  console.log(allTimes);
  console.log("===============================");

  for (let i = 0; i < allTimes.length; i++) {
    let cond = false;
    for (let j = 0; j < finalExcluded.length; j++) {
      if (i === finalExcluded[j] && !cond) {
        cond = !cond;
      }
    }
    if (!cond) {
      possibleDates.push(allTimes[i]);
    }
  }
  console.log(possibleDates);
  return possibleDates;
};

export { getPossibleTimes };
