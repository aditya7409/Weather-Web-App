const btn = document.getElementById('btn1');
const data = document.getElementById('search');

const handleClickEvent = async (e) => {
    e.preventDefault();
    if (data.value === "") {
        alert("no data recieved");
    }
    else {

        const cityName = data.value;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dda5efaf93ae2397dace35b3f46ef33d`;
        await fetch(url).then(response => {
            return response.json();
        }).then(data => {
            // console.log(data);
            const arrData = [data];
            console.log(arrData);
            console.log(arrData[0].name);
            const tempStatus = arrData[0].weather[0].main;
            const render = document.getElementById("renderData2");
            if (tempStatus === "Clear") {
                render.innerHTML = `<h2 >${arrData[0].name}</h2>
                <h2 >${arrData[0].main.temp}  &#8451;</h2>
                <h3 >${arrData[0].main.feels_like}  &#8451;</h3>
                <h3>${arrData[0].wind.speed} km/h</h3>
                <h3>${arrData[0].weather[0].description}<i class='fas fa-sun' style='color:#eccc68;'></i></h3>`
            }
            else if (tempStatus === "Clouds") {
                render.innerHTML = `<h2 >${arrData[0].name}</h2>
                <h2 >${arrData[0].main.temp}  &#8451;</h2>
                <h3 >${arrData[0].main.feels_like}  &#8451;</h3>
                <h3>${arrData[0].wind.speed} km/h</h3>
                <h3>${arrData[0].weather[0].description}<i class='fas fa-cloud' style='color:#f1f2f6;'></i></h3>`  
            }
            else if (tempStatus === "Rain") {
                render.innerHTML = `<h2 >${arrData[0].name}</h2>
                <h2 >${arrData[0].main.temp}  &#8451;</h2>
                <h3 >${arrData[0].main.feels_like}  &#8451;</h3>
                <h3>${arrData[0].wind.speed} km/h</h3>
                <h3>${arrData[0].weather[0].description}<i class='fas fa-cloud-rain' style='color:#a4b0b4be;'></i></h3>`  
            }
            else {
                render.innerHTML = `<h2 >${arrData[0].name}</h2>
                <h2 >${arrData[0].main.temp}  &#8451;</h2>
                <h3 >${arrData[0].main.feels_like}  &#8451;</h3>
                <h3>${arrData[0].wind.speed} km/h</h3>
                <h3>${arrData[0].weather[0].description}<i class='fas fa-sun' style='color:#eccc68;'></i></h3>` 
            }
        }).catch(err => {
            console.log("error reading data");
        })

    }
}

btn.addEventListener('click', handleClickEvent);