let arrWithDayData;
let dayArr;
let index;
let temporaryTemp;

const getObj = data => {
  arrWithDayData = [];
  dayArr = 0;
  index = -1;
  temporaryTemp = 0;
  let inputArr = data.list;
  for (let day in inputArr) {
    const thisDay = inputArr[day];
    let time = new Date(thisDay.dt * 1000);
    temporaryTemp = Math.round(thisDay['main']['temp']);
    let currentDay = time.getUTCDate();
    if (dayArr !== currentDay) {
      dayArr = currentDay;
      const nameOfDay = time.toLocaleString('en', { weekday: 'long' });
      const nameOfMonth = time.toLocaleString('en', { month: 'short' });
      arrWithDayData.push({
        currentDay,
        nameOfDay,
        nameOfMonth,
        time: [],
        min: temporaryTemp,
        max: temporaryTemp,
      });
      index += 1;
      setTimeArr(thisDay, time);
    } else {
      if (arrWithDayData[index]['min'] > Math.round(thisDay['main']['temp'])) {
        arrWithDayData[index]['min'] = Math.round(thisDay['main']['temp']);
      }
      if (arrWithDayData[index]['max'] < Math.round(thisDay['main']['temp'])) {
        arrWithDayData[index]['max'] = Math.round(thisDay['main']['temp']);
      }
      setTimeArr(thisDay, time);
    }
  }
  return arrWithDayData;
};

const setTimeArr = (day, time) => {
  let hourTime = time.getHours();
  if (hourTime === 0) {
    hourTime = 24;
  }
  const localTime = hourTime + time.getTimezoneOffset() / 60;
  const weather = day['weather'][0]['icon'];
  const temperature = Math.round(day['main']['temp']);
  const pressure = day['main']['pressure'];
  const humidity = day['main']['humidity'];
  const wind = day['wind']['speed'];
  arrWithDayData[index]['time'].push({
    localTime,
    weather,
    temperature,
    pressure,
    humidity,
    wind,
  });
};

export default getObj;
