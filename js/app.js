const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTem(data))
}
const setInnerText=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTem =(temp)=>{
    console.log(temp)
    setInnerText('city',temp.name);
    setInnerText('temperature',temp.main.temp);
    setInnerText('condition',temp.weather[0].main);
   //set icon
   const url=`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
   const icon =document.getElementById('weather-icon'); 
    icon.setAttribute('src',url)
}

