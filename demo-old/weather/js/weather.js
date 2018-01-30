var x,y,city,state,zip,temp,time_now,description,dt;

// get current location and invoke the getweather method
var getloc = function(){
    $.getJSON("http://ip-api.com/json", function(data){
        console.log(data);
         x = data.lat;
         y = data.lon;
         city = data.city;
         state = data.region;
         zip = data.zip;
         
        $('#state').text('State: '+state);
        $('#city').text('City: '+city);
        $('#zip').text('Zip: '+zip);
        getweather(x,y);
    })
}


getloc();
var getweather = function(lat,lon){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=3aec23a95178ab096a39e4cbc80f6e7c&units=metric",function(data){
        console.log(data)
        temp = data.main.temp + '°C';
        var current = data.weather[0].description;
        console.log(current);
        time_now = new Date();
        
        var year = time_now.getFullYear();
        console.log(year);
        
        var month = parseInt(time_now.getMonth()) + 1;
        console.log(month);
        
        var d = time_now.getDate();
        console.log(d);
        
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var week = days[time_now.getDay()];
        console.log(week);
        
        var now = year + '/' + month + '/' + d + '  ' + week;
        console.log(now);
        
        dt = time_now.getHours();
        console.log(dt);
//        if(dt>=19 || dt <=7){
//            $('img').attr("src","img/night.jpg");
//            day_night = false;
//        }else{
//            day_night = true;
//            $('img').attr("src","img/cloudy.jpg");
//        }

        $('#temp').text(temp);
        $('#time').text(now);
        $('#weather').text('Condition: '+current);
        console.log(data);
        weather(current);
    })
}


function estimate(a){
    var current_weather;
    if(dt>=19 || dt <=7){
        switch(a){
        case 'clear sky':  {current_weather = 'CLEAR_NIGHT' ; $('img').attr("src","img/night.jpg");}
            break;
        case 'few clouds': {current_weather = 'PARTLY_CLOUDY_NIGHT';$('img').attr("src","img/night.jpg");}
            break;
        case 'scattered clouds':;
        case 'broken clouds': {current_weather = 'CLOUDY';$('img').attr("src","img/night.jpg");}
            break;
        case 'shower rain':;
        case 'light rain':;
        case 'moderate rain':;
        case 'light intensity drizzle':;
        case 'thunderstorm': {current_weather = 'RAIN';$('img').attr("src","img/rain-night.jpg");}
            break;
        case 'sonw': {current_weather = 'SNOW';$('img').attr("src","img/snownight.jpg");}
            break;
        default: {current_weather = 'FOG';$('img').attr("src","img/night.jpg");}
        }
    }else{
        switch(a){
        case 'clear sky':  {current_weather = 'CLEAR_DAY'; $('img').attr("src","img/sunny.jpg");}
            break;
        case 'few clouds': {current_weather = 'PARTLY_CLOUDY_DAY';$('img').attr("src","img/sunny.jpg");}
            break;
        case 'scattered clouds':;
        case 'broken clouds': {current_weather = 'CLOUDY';$('img').attr("src","img/cloudy.jpg");}
            break;
        case 'shower rain':;
        case 'light rain':;
        case 'moderate rain':;
        case 'light intensity drizzle':;
        case 'thunderstorm': {current_weather = 'RAIN';$('img').attr("src","img/rain.jpg");}
            break;
        case 'sonw': {current_weather = 'SNOW';$('img').attr("src","img/snow.jpg");}
            break;
        default: current_weather = 'FOG';
        }
    }
    return current_weather;
}

var weather = function(current){
  var skycons = new Skycons({"color": "white"});
  var current_now = estimate(current);
    console.log(current_now);
    skycons.add("icon",current_now);
/*    
  skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("icon2", Skycons.CLEAR_DAY);
  skycons.add("icon3", Skycons.CLEAR_NIGHT);
  skycons.add("icon4", Skycons.CLOUDY);
  skycons.add("icon5", Skycons.PARTLY_CLOUDY_NIGHT);
  skycons.add("icon6", Skycons.RAIN);
  skycons.add("icon7", Skycons.SNOW);
  skycons.add("icon8", Skycons.WIND);
*/
  // start animation!
  skycons.play();
}