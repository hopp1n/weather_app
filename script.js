window.addEventListener('load', () => {


    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6748d193c947ede8e7ba483f3e230171`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {temp} = data.main;
                    const { description } = data.weather[0];
                    const { name } = data; 
                    const degree = document.querySelector('.temperature-degree');
                    const descr = document.querySelector('.temperature-description');
                    const location = document.querySelector('.location-timezone');

                    degree.textContent =  Math.round( temp - 273.15, 0);
                    descr.textContent = description;
                    location.textContent = name;
                    console.log(position);
                });   
        }); 
    }

});