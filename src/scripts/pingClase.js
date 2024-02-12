import axios from "axios";

function pingClase(idUsuario, fecha, hora){
    axios.get("https://bellumserver.netlify.app/.netlify/functions/api/coaching/proxima/usuario=" + idUsuario).then((lista) => {
        console.log(lista)
    })
}