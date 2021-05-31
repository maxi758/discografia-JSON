
const title = document.getElementById("title");
const year = document.getElementById("year");
const artist = document.getElementById("artist");
const button = document.getElementById("btn-send");
const container = document.getElementById("container");

button.addEventListener("click", ()=>{
    const xhr = new XMLHttpRequest();
    console.log(title.value);
    xhr.addEventListener("load", ()=>{
        container.innerHTML = "";
        const response = JSON.parse(xhr.responseText);

        response.forEach(element => {
            container.innerHTML += 
            `<div class="temas">
                <h2>${element.titulo} </h2>
                <h3>${element.artista} </h3>
                <img src="${element.tapa}">
            </div>`;
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
