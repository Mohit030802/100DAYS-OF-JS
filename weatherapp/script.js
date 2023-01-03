const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c74ff057bmsh36de890169a88e1p146495jsn0faa64769851',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            temp.innerHTML=response.temp
            feels_like.innerHTML=response.feels_like
            humidity.innerHTML=response.humidity
            min_temp.innerHTML=response.min_temp
            max_temp.innerHTML=response.max_temp
            wind_speed.innerHTML=response.wind_speed
            wind_degrees.innerHTML=response.wind_degrees
           
          
    })
	.catch(err => console.error(err)); 
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity2.innerHTML=response.humidity
            min_temp2.innerHTML=response.min_temp
            max_temp2.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity3.innerHTML=response.humidity
            min_temp3.innerHTML=response.min_temp
            max_temp3.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity4.innerHTML=response.humidity
            min_temp4.innerHTML=response.min_temp
            max_temp4.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity5.innerHTML=response.humidity
            min_temp5.innerHTML=response.min_temp
            max_temp5.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Moscow', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity6.innerHTML=response.humidity
            min_temp6.innerHTML=response.min_temp
            max_temp6.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then(response =>{ 
        console.log(response)
       
            
            
            humidity7.innerHTML=response.humidity
            min_temp7.innerHTML=response.min_temp
            max_temp7.innerHTML=response.max_temp
            
           
          
    })
	.catch(err => console.error(err)); 
    


