import bellumLogo from '../assets/Logo.png'

const NoMatch = () => {

    return (
        <div className="inicioSesionBellum">
            <div className="cajaInicioSesion">
                <img src={bellumLogo} alt="Bellum Logo" style={{ width: "10rem", height: "10rem" }} />
                <form style={{ paddingbottom: "5rem" }}>
                    <div className="juntarContacto">
                        <input type="text" placeholder="Usuario" onChange={(e) => { setNombreInicio(e.target.value) }} className="textLogin"></input>
                    </div>
                    <div className="juntarContacto">
                        <input type="password" placeholder="Contraseña" onChange={(e) => { setContrasenaInicio(e.target.value) }} className="textLogin"></input>
                    </div>
                    <div className="juntarContacto">
                        <input type="submit" value="Login" onClick={iniciarSesion} className="submitLogin"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NoMatch