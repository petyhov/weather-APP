(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("0HMw");var r=[{quote:"Just for the record, the weather today is calm and sunny, but the air is full of bullshit.",author:"Chuck Palahniuk"},{quote:"The sun did not shine. It was too wet to play. So we sat in the house. All that cold, cold, wet day.",author:"Dr. Seuss"},{quote:"After three days men grow weary, of a wench, a guest, and weather rainy.",author:"Benjamin Franklin"},{quote:"Gonna be a real frog-strangling turd-floater.",author:"Charles Martin"},{quote:"Weather here in this part of the world is just as moody, just as subjective and disloyal, as people.",author:"Jackie Kay"}],o={inputRef:document.querySelector(".input-section__form"),bookmarkRef:document.querySelector(".bookmarks__list"),bookmarkBtnRef:document.querySelector(".input-section__bookmarkBtn"),dataBlockRef:document.querySelector(".data"),fiveDaysRef:document.querySelector(".five__days"),oneDaySection:document.querySelector(".one-day-section"),locationName:document.getElementById("locationName"),locationWeather:document.getElementById("locationWeather"),todayTemperature:document.getElementById("todayTemperature"),todayMinTemperature:document.getElementById("todayMinTemperature"),todayMaxTemperature:document.getElementById("todayMaxTemperature"),weatherBlock:document.querySelector(".background-image"),commentTextContent:document.querySelector(".comments__content"),commentTextAuthor:document.querySelector(".comments__author"),monthRef:document.getElementById("currentMonth"),currentTimeRef:document.getElementById("timer"),currentDateRef:document.getElementById("currentDate"),sunriseRef:document.getElementById("sunrise"),sunsetRef:document.getElementById("sunset"),preloaderRef:document.getElementById("preload-img"),mainRef:document.querySelector(".main-section")};setInterval((function(){var e=Math.floor(Math.random()*r.length);o.commentTextContent.textContent=r[e].quote,o.commentTextAuthor.textContent=r[e].author}),9e3);var a=n("qIEf"),i=n.n(a);n("IUJq"),n("dghS"),n("tLJb");n("iPZ8"),n("kypl"),n("pCzD"),n("4owi"),n("/YXa"),n("lmye"),n("WB5j"),n("D/wG"),n("JBxO"),n("JjHl"),n("9UJh"),n("WoWj"),n("U00V"),n("FdtR");var u={keyApi:"4155ac6d3fb539e9f841172aed94674f",getForecast:function(e){var t="?q="+e+"&units=metric&appid="+this.keyApi;return fetch("http://api.openweathermap.org/data/2.5/weather"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastFiveDays:function(e){var t="?q="+e+"&units=metric&appid="+this.keyApi;return fetch("http://api.openweathermap.org/data/2.5/forecast"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastByCurrentPosition:function(e){var t="?lat="+e.lat+"&lon="+e.lon+"&units=metric&appid="+this.keyApi;return fetch("http://api.openweathermap.org/data/2.5/weather"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastFiveDaysByCurrentPosition:function(e){var t="?lat="+e.lat+"&lon="+e.lon+"&units=metric&appid="+this.keyApi;return fetch("http://api.openweathermap.org/data/2.5/forecast"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))}},c=function(e){u.getForecast(e).then((function(e){o.locationWeather.src="http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",o.locationName.textContent=e.name+", "+e.sys.country,o.todayTemperature.textContent=Math.round(e.main.temp),o.todayMinTemperature.textContent=Math.round(e.main.temp_min),o.todayMaxTemperature.textContent=Math.round(e.main.temp_max)}))};n("x3Br"),n("Y4kN"),n("Muwe"),n("aZFp");function l(e){var t=e.reduce((function(e,t){var n=t.dt_txt.split(" ")[0];return e[n]||(e[n]=[]),e[n].push(t),e}),{});return Object.getOwnPropertyNames(t).map((function(e){return t[e]}))}var s;n("e+qc");var m=function(e){clearInterval(s);var t=new Date(1e3*e.sys.sunrise).getTime()+6e4*new Date(1e3*e.sys.sunrise).getTimezoneOffset()+1e3*e.timezone,n=new Date(t),r=new Date(1e3*e.sys.sunset).getTime()+6e4*new Date(1e3*e.sys.sunset).getTimezoneOffset()+1e3*e.timezone,a=new Date(r);function i(e){return String(e).padStart(2,"0")}function u(){var t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset()+1e3*e.timezone;return new Date(n)}o.currentDateRef.innerHTML=u().getDate()+"<sup>th</sup>"+u().toLocaleString("en",{weekday:"short"}),o.monthRef.innerHTML=u().toLocaleString("en",{month:"long"}),o.sunriseRef.innerHTML=i(n.getHours())+":"+i(n.getMinutes()),o.sunsetRef.innerHTML=i(a.getHours())+":"+i(a.getMinutes()),s=setInterval((function(){o.currentTimeRef.innerHTML=i(u().getHours())+":"+i(u().getMinutes())+":"+i(u().getSeconds())}),1e3)},d={keyApi:"17975511-a1a75a89facdad63fcb9c5ee1",getImage:function(e){var t="?image_type=photo&orientation=horizontal&q="+e+"&key="+this.keyApi;return fetch("https://pixabay.com/api/"+t).then((function(e){return e.json()})).then((function(e){return e.hits})).catch((function(e){return e}))}};function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n("IvQZ"),n("4NM0"),n("X5mX");var p,y,g,v,w=[],b=function(e){return'<li class="bookmarks__item">'+e+'<button class="bookmarkcCloseBtn"></button></li>'},k=function(){if(localStorage.getItem("city")){(w=JSON.parse(localStorage.getItem("city"))).map((function(e){return b(e)})).map((function(e){return o.bookmarkRef.insertAdjacentHTML("beforeend",e)}));e=".bookmarks__list",i()(e).slick({infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}}]})}var e},T=n("QJ3N"),M=function(e){u.getForecast(e).then((function(t){var n;"404"!==t.cod&&e?(n=e,w.includes(n)||(w.push(n),localStorage.setItem("city",JSON.stringify(w)),o.bookmarkRef.insertAdjacentHTML("beforeend",b(n)))):Object(T.error)({title:"Oh No!",text:"Enter city!"})}))},x=(n("bzha"),n("zrP5"),n("eI3V")),S=n.n(x),_=function(e,t){var n=t.getHours();0===n&&(n=24);var r=n+t.getTimezoneOffset()/60,o=e.weather[0].icon,a=Math.round(e.main.temp),i=e.main.pressure,u=e.main.humidity,c=e.wind.speed;p[g].time.push({localTime:r,weather:o,temperature:a,pressure:i,humidity:u,wind:c})},D=function(e){p=[],y=0,g=-1,v=0;var t=e.list;for(var n in t){var r=t[n],o=new Date(1e3*r.dt);v=Math.round(r.main.temp);var a=o.getUTCDate();if(y!==a){y=a;var i=o.toLocaleString("en",{weekday:"long"}),u=o.toLocaleString("en",{month:"short"});p.push({currentDay:a,nameOfDay:i,nameOfMonth:u,time:[],min:v,max:v}),g+=1,_(r,o)}else p[g].min>Math.round(r.main.temp)&&(p[g].min=Math.round(r.main.temp)),p[g].max<Math.round(r.main.temp)&&(p[g].max=Math.round(r.main.temp)),_(r,o)}return p};function I(){o.preloaderRef.classList.add("preload-container"),setTimeout((function(){o.preloaderRef.classList.remove("preload-container")}),2e3)}function O(){o.inputRef.addEventListener("submit",(function(e){e.preventDefault(),I();var t=e.currentTarget.elements.search.value;c(t),u.getForecast(t).then((function(e){"404"!==e.cod&&t?m(e):Object(T.error)({title:"NOTICE!",text:"Can't show such city!"})})),u.getForecastFiveDays(t).then((function(e){var t=D(e);console.log(t),document.querySelector(".five-day-section__list").innerHTML="",document.querySelector(".five-day-section__list").insertAdjacentHTML("beforeend",S()(t))})),console.log(d.getImage(t).then((function(e){0===e.length&&Object(T.error)({title:"Sorry!",text:"The picture is not uploaded!"});var t=e[Math.floor(Math.random()*e.length)].largeImageURL;console.log(o.weatherBlock.style.backgroundImage="url("+t+")")})))})),o.bookmarkBtnRef.addEventListener("click",(function(){var e=o.inputRef.search.value;M(e),o.inputRef.search.value=""})),document.addEventListener("DOMContentLoaded",(function(){k(),o.bookmarkRef.addEventListener("click",(function(e){Object.values(e.target.classList).includes("bookmarkcCloseBtn")&&e.target.parentElement.remove()}))}))}function j(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})).then((function(e){I(),o.mainRef.classList.remove("main-section"),function(e){var t=e.lat,n=e.lon;u.getForecastByCurrentPosition({lat:t,lon:n}).then((function(e){m(e),o.locationWeather.src="http://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",o.locationName.textContent=e.name+", "+e.sys.country,o.todayTemperature.textContent=Math.round(e.main.temp),o.todayMinTemperature.textContent=Math.round(e.main.temp_min),o.todayMaxTemperature.textContent=Math.round(e.main.temp_max)}));var r=[];u.getForecastFiveDaysByCurrentPosition({lat:t,lon:n}).then((function(e){var t=l(e.list);t.length=5,t.map((function(e){for(var n,o,a=j(e);!(o=a()).done;)n=o.value,Object.values.apply(Object,t[0])[1];var i={day:new Date(1e3*n.dt).toLocaleString("en",{weekday:"long"}),date:new Date(1e3*n.dt).getDate(),month:new Date(1e3*n.dt).toLocaleString("en",{month:"short"}),weather:n.weather[0].icon,minTemperature:n.main.temp_min,maxTemperature:n.main.temp_max,forecast:[{time:new Date(1e3*n.dt).getUTCHours()+new Date(1e3*n.dt).getUTCMinutes(),weather:n.weather[0].icon,pressure:n.main.pressure,humidity:n.main.humidity,wind:n.wind.speed}]};r.push(i)}))})),document.querySelector(".five-day-section__list").innerHTML="",document.querySelector(".five-day-section__list").insertAdjacentHTML("beforeend",S()(r))}({lat:e.coords.latitude,lon:e.coords.longitude}),I(),O()})).catch((function(e){I(),o.mainRef.classList.remove("main-section"),c("london"),u.getForecast("london").then((function(e){m(e)})),u.getForecastFiveDays("london").then((function(e){var t=l(e.list);t.length=5,t.map((function(e){for(var n,r,o=f(e);!(r=o()).done;)n=r.value,Object.values.apply(Object,t[0])[1];new Date(1e3*n.dt).toLocaleString("en",{weekday:"long"}),new Date(1e3*n.dt).getDate(),n.weather[0].icon,n.main.temp_min,n.main.temp_max,new Date(1e3*n.dt).getUTCHours(),new Date(1e3*n.dt).getUTCMinutes(),n.weather[0].icon,n.main.pressure,n.main.humidity,n.wind.speed}))})),d.getImage("london").then((function(e){var t=e[Math.floor(Math.random()*e.length)].largeImageURL;return o.weatherBlock.style.backgroundImage="url("+t+")"})),O()}))},eI3V:function(e,t,n){var r=n("mp5j");e.exports=(r.default||r).template({1:function(e,t,n,r,o){var a,i=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,c="function",l=e.escapeExpression,s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="five-day-section__item">\r\n    <h3 class="five-day-section__day">'+l(typeof(a=null!=(a=s(n,"nameOfDay")||(null!=t?s(t,"nameOfDay"):t))?a:u)===c?a.call(i,{name:"nameOfDay",hash:{},data:o,loc:{start:{line:3,column:38},end:{line:3,column:51}}}):a)+'</h3>\r\n    <h4 class="five-day-section__date">'+l(typeof(a=null!=(a=s(n,"currentDay")||(null!=t?s(t,"currentDay"):t))?a:u)===c?a.call(i,{name:"currentDay",hash:{},data:o,loc:{start:{line:4,column:39},end:{line:4,column:53}}}):a)+" "+l(typeof(a=null!=(a=s(n,"nameOfMonth")||(null!=t?s(t,"nameOfMonth"):t))?a:u)===c?a.call(i,{name:"nameOfMonth",hash:{},data:o,loc:{start:{line:4,column:54},end:{line:4,column:69}}}):a)+'</h4>\r\n    <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" />\r\n    <div class="five-day-section__min-max-container">\r\n        <div>\r\n            <p class="min-max-container__name">min</p>\r\n            <p class="min-max-container__temperature"><span>'+l(typeof(a=null!=(a=s(n,"min")||(null!=t?s(t,"min"):t))?a:u)===c?a.call(i,{name:"min",hash:{},data:o,loc:{start:{line:9,column:60},end:{line:9,column:67}}}):a)+'</span>&deg;</p>\r\n        </div>\r\n        <div>\r\n            <p class="min-max-container__name">max</p>\r\n            <p class="min-max-container__temperature">\r\n                <span id="todayMaxTemperature">'+l(typeof(a=null!=(a=s(n,"max")||(null!=t?s(t,"max"):t))?a:u)===c?a.call(i,{name:"max",hash:{},data:o,loc:{start:{line:14,column:47},end:{line:14,column:54}}}):a)+'</span>&deg;\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <button class="five-day-section__button">more info</button>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?a:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.780118b81a8756ace863.js.map