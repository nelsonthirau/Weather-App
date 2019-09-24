window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    // let temperatureSection = document.querySelector(".temperature-section");
    // const temperatureSpan = document.querySelector(".temperature-span");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/0dee316cbf141395aafcccc65830cd46/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                    temperatureDescription.textContent = summary;
                    temperatureDegree.textContent = temperature;
                    locationTimezone.textContent = data.timezone;

                    // setIcons(icon, document.querySelector(".icon"));

                    // temperatureSection.addEventListener("click", () => {
                    //     if(temperatureSpan.text-content === 'F') {
                    //         temperatureSpan.textContent = 'C';
                    //     }
                    //     else {
                    //         temperatureSpan.textContent = "F";
                    //     }
                    // })
                });
        });
    }
    // function setIcons(icon, iconID)
    // {
    //     const skycons = new Skycons({color: "white"});
    //     const currentIcon = icon.replace(/- /g, "_").toUpperCase();
    //     // Skycons.play();
    //     return skycons.set(iconID, skycons[currentIcon]);
    // }
});