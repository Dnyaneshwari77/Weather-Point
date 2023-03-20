let apiCall ={
    apiKey:"ac60030a9cc44d5b1e7633e1de904b29",
    fetchDetail:function(city)
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            +this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWetherDetail(data))
    },
    displayWetherDetail:function(data)
    {
        const {name}=data
        const {icon ,description}=data.weather[0]
        const {temp,humidity}=data.main
        const {speed}=data.wind

        document.querySelector(".name").innerHTML="Wether in "+name;
        document.querySelector(".temp").innerHTML=temp+" °C"
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".dicription").innerHTML=description
        document.querySelector(".humidity").innerHTML="Humidity = "+humidity +"%"
        document.querySelector(".wind_speed").innerHTML="Wind speed="+speed +"km/h"
        console.log(name,icon,description,temp,humidity,speed,)
        if(document.querySelector(".show").classList.contains("hidden"))
        {
            document.querySelector(".show").classList.remove("hidden")
        }
        
    },
    search:function()
    {
        this.fetchDetail(document.querySelector(".input").value)
    }

}

const btn=document.querySelector("#search")
console.log(btn)
btn.addEventListener("click",()=>{
    apiCall.search();
}
)

const input=document.querySelector(".input")
input.addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        apiCall.search();
    }
})

