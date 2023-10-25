document.getElementById("search").addEventListener("click", function () {
    const city = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`) 
    /*  replace YOUR_API_KEY https://api.openweathermap.org */
        .then(response => response.json())
        .then(data => {
            const temperature = (data.main.temp - 273.15).toFixed(2);
            const description = data.weather[0].description;
            document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
            document.getElementById("description").innerText = `Description: ${description}`;
        })
        .catch(error => console.log(error));
});
