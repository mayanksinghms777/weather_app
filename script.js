const curdate = document.getElementById("date")
const weathercon = document.getElementById("weathercon")

const tempStatus = "{%tempstatus%}";

      //condition to check sunny or cloudy
      if (tempStatus == "Sunny") {
        weathercon.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        weathercon.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rainy") {
        weathercon.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        weathercon.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }

const currentday = () =>{
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
    let currday = new Date();
    day = weekday[currday.getDay()];
    return day;
}

const currentmonth = () =>{
    var weekday = new Array(12);
        weekday[0] = "Jan";
        weekday[1] = "Feb";
        weekday[2] = "Mar";
        weekday[3] = "Apr";
        weekday[4] = "May";
        weekday[5] = "Jun";
        weekday[6] = "Jul";
        weekday[7] = "Aug";
        weekday[8] = "Sep";
        weekday[9] = "Oct";
        weekday[10] = "Nov";
        weekday[11] = "Dec";
    
    let currmonth = new Date();
    month = weekday[currmonth.getMonth() +1];
    return month;
}

const currentdate = () =>{
    let currdate = new Date();
    date = currdate.getDate();
    return date;
}

const currenttime = () =>{
    
    let currtime = new Date();
    hr = currtime.getHours();
    min = currtime.getMinutes();

    let periods = "AM";

    if (hr > 11) {
      periods = "PM";
      if (hr > 12) hr -= 12;
    }
    if (min < 10) {
      min = "0" + min;
    }

    return `${hr} : ${min} ${periods}`;
}

curdate.innerHTML = currentday() +" | " + currentmonth() + " " + currentdate() + " | " + currenttime();

