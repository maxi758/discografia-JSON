const express = require("express");
const path = require("path");
const app = express();
const discos = require('./discos.json');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(path.join(__dirname , "../client")));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get("/disco", (req, res)=>{
    let title = req.query.title;
    let year = req.query.year;
    let artist = req.query.artist;

    let result = discos.discos;

    if(title){
        result = result.filter((disco)=>disco.titulo.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }
    if(year){
        result = result.filter((disco)=>disco.lanzamiento.toString()===year);
    }
    if(artist){
        result = result.filter((disco)=>disco.artista.toLocaleLowerCase().includes(artist.toLocaleLowerCase()));
    }
    console.log(result);
    res.json(result);
});

app.listen(PORT, ()=>{
    console.log("iniciando server");
})