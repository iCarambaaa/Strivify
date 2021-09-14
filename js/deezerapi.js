window.onload = () => {

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		    "x-rapidapi-key": "ea8551d0e8msh79995d8d74243ecp1c8355jsn30183cae82b1"
	    }
    })
    .then(response =>  response.json())
	    // console.log(response);
        

    .then(body => {
	    console.log(body);

        const row = document.querySelector("body > div > div > div.mr-0.mainPage > div.d-flex")

                    for (let i = 0; i < body.data.length; i++) {
                        const obj = body.data[i]

                        const col = document.createElement("div")
                        
                       
                        col.innerHTML = `
                        
                        <div class="card mb-3 op mx-3 " style="min-width: 270px; max-width: 270px; max-height: 80px;" >
                        <a href="./album.html" style="text-decoration: none; color: white;">
                    
                        <div class="row">
                          <div class="col-md-4">
                            <img src="${obj.album.cover_medium}" style="max-width: 80px;" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${obj.title_short}</h5>
                              <div class="play-btn "></div>
                    
                          </div>
                          </div>
                        </div>
                      </a>
                      </div>
                        `

                        row.appendChild(col)
                    }
                    let baum = body.data[7].album.cover_medium
                    console.log(baum)
    })
    

    .catch(err => {
	    console.error(err);
    });


fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "ea8551d0e8msh79995d8d74243ecp1c8355jsn30183cae82b1"
    }
})
    .then(response =>  response.json())
         // console.log(response);
    

    .then(body => {
        console.log(body);

const row2 = document.querySelector("body > div > div > div.mr-0.mainPage > div:nth-child(6)")

    for (let i = 0; i < body.data.length; i++) {
        const obj = body.data[i]

     const col = document.createElement("div")
        col.classList.add = "col-3"

         col.innerHTML = `
    
             <div class="card p-2 cb mx-2 mb-4" style="min-width: 150px; max-width: 200px; height: 328.5px">
                <img src="${obj.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h6 class="card-title">${obj.title_short}</h6>
                    <div class="play-btn-2 "></div>
                    <a href="./artist-page.html" style="text-decoration-color: white;">
                     <p class="cardtext">${obj.artist.name}</p>
                     </a>
                </div>
            </div>
    `

    row2.appendChild(col)
}})

        .catch(err => {
            console.error(err);
});


fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "ea8551d0e8msh79995d8d74243ecp1c8355jsn30183cae82b1"
    }
})
    .then(response =>  response.json())
         // console.log(response);
    

    .then(body => {
        console.log(body);

const row3 = document.querySelector("body > div > div > div.mr-0.mainPage > div.container-fluid.d-flex.justify-content-start.mb-5.pb-5")

    for (let i = 0; i < body.data.length; i++) {
        const obj = body.data[i]

     const col = document.createElement("div")
        col.classList.add = "col-3"

         col.innerHTML = `
    
             <div class="card p-2 cb mx-2 mb-4" style="min-width: 200px; max-width: 200px; height: 328.5px">
                <img src="${obj.album.cover_medium}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h6 class="card-title">${obj.title_short}</h6>
                    <div class="play-btn-2 "></div>
                    <a href="./artist-page.html" style="text-decoration-color: white;">
                     <p class="cardtext">${obj.artist.name}</p>
                     </a>
                </div>
            </div>
    `

    row3.appendChild(col)
}})

        .catch(err => {
            console.error(err);
});
}


// OVERFLOW ON


const overflowOn = function(){
    const on = document.querySelector("body > div > div > div.mr-0.mainPage > div.container-fluid.d-flex.justify-content-start.mb-5.pb-5")
    on.classList.remove("flex-wrap")
    console.log(on)
}

// OVERFLOW OFF


const overflowOff = function(){
    const off = document.querySelector("body > div > div > div.mr-0.mainPage > div.container-fluid.d-flex.justify-content-start.mb-5.pb-5")
    off.classList.add("flex-wrap")
    console.log(off)
}
