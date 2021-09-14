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

        const row = document.querySelector("body > div > div > div.mr-0.mainPage > div.row.fetch")

                    for (let i = 0; i < body.data.length; i++) {
                        const obj = body.data[i]

                        const col = document.createElement("div")
                        col.className = "col-3"

                        col.innerHTML = `
                        
                        <div class="card">
                            <img src="${obj.album.cover_medium}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${obj.title_short}</h5>
                                <p class="card-text">${obj.duration}s</p>
                            </div>
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
}