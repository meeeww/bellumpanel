import Axios from 'axios'

function checkSession() {
    if (localStorage.getItem("token") != null || localStorage.getItem("token") == "") {
        let baseURL = "https://bellumserver.netlify.app/.netlify/functions/api/checksession";
        let baseURL2 = "https://bellumserver.netlify.app/.netlify/functions/api/usuarios/id=";
        let updateURL = "https://bellumserver.netlify.app/.netlify/functions/api/updatesession"

        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ';

        let config = {
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        };


        var data = { token: localStorage.getItem("token") };

        Axios.post(baseURL, data, config)
            .then((res) => {
                if (res.data[0]) {
                    let idUsuario = res.data[0]["id_usuario"]
                    Axios.get((baseURL2 + idUsuario), config)
                        .then((res) => {
                            if (res.data[0] != undefined) {
                                Axios.put(updateURL, { fecha: date, token: localStorage.getItem("token")}, config)
                                //location.replace("http://localhost:5173")
                                localStorage.setItem("usuario", JSON.stringify(res.data[0]))
                            } else {
                                localStorage.removeItem("token")
                                localStorage.removeItem("usuario")
                                //location.replace("http://localhost:5173/login")
                            }
                        })

                } else {
                    console.log()
                    //localStorage.setItem("token", "")
                }
                return {
                    statusCode: 200,
                    body: JSON.stringify({ title: "this was a success" }),
                };
            })
    } else {
        location.replace("http://localhost:5173/login")
    }
}

export default checkSession