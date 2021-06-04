
const inputTitle = document.getElementById("title");
const inputYear = document.getElementById("year");
const inputArtist = document.getElementById("artist");
const button = document.getElementById("btn-send");
const container = document.getElementById("container");

button.addEventListener("click", ()=>{
    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener("load", ()=>{
        container.innerHTML = "";
        const response = JSON.parse(xhr.responseText);
        console.log(title.value, xhr.status);
        /*response.forEach(element => {
            container.innerHTML += 
            `<div class="temas">
                <h2>${element.titulo} </h2>
                <h3>${element.artista} </h3>
                <img src="${element.tapa}">
            </div>`;
        });*/
        response.forEach(element => {
            const box = document.createElement("div");
            const title = document.createElement("h2");
            const artist = document.createElement("h3");
            const launch = document.createElement("h4");
            const cover = document.createElement("img");
            title.textContent = `${element.titulo}`;
            artist.textContent = `${element.artista}`;
            launch.textContent = `${element.lanzamiento}`;
            cover.src = `${element.tapa}`;
            box.appendChild(title);
            box.appendChild(artist);
            box.appendChild(launch);
            box.appendChild(cover);
            box.classList.add("temas");
            container.appendChild(box);
        });
    })
    let url = "";
    if(title.value){
        url += (url ? "&" : "") + `title=${title.value}`
    }
    if(year.value){
        url += (url ? "&" : "") + `year=${year.value}`
    }
    if(artist.value){
        url += (url ? "&" : "") + `artist=${artist.value}`
    }
    xhr.open("GET",`/disco?${url}`);
    xhr.send();
});
