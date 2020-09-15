export function hourlyWeather(obj){
let hourObj = {};
for (const value of obj){
    hourObj = {
        time: value.time.map(e =>({
            time: e.localTime,
            temp: e.temperature,
            humidity: e.humidity,
            pressure: e.pressure,
            wind: e.wind,
        })),
    }
}
return hourObj;
}

