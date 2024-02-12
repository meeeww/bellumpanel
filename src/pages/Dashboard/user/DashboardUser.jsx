import HistorialElo from "./HistorialElo";
import InfoUser from "./InfoUser";
import Header from '../admin/HeaderAdmin';
import Navbar from '../admin/Navbar';
import GraficaElo from "./GraficaElo";
import HistorialClases from "./HistorialClases";

import axios from "axios";
import { useEffect, useState } from "react";
import checkSession from '../../../scripts/sessionManager'
import PanelClase from "./PanelClase";
import Notas from "./Notas";
import AgregarNota from "./AgregarNota";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const DashboardUser = () => {

    const [usuario, setUsuario] = useState([])
    const [cuentas, setCuentas] = useState([])
    const [cargando, setCargando] = useState(true)

    const [registroCambioClases, setRegistroCambioClases] = useState(0)

    useEffect(() => {
        checkSession()
        if (cargando) {
            axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios/id=" + urlParams.get('id')).then((usuarios) => {
                setUsuario(usuarios.data[0])
                axios.get("https://bellumserver.netlify.app/.netlify/functions/api/cuentas=" + urlParams.get('id')).then((usuarios) => {
                    setCuentas(usuarios.data)
                    setCargando(false)
                })
            })
        }
    }, [])

    if (cargando)
        return (<div className="h-[100vh] flex items-center"><div className="loaderRing"></div></div>)

    return (
        <>
            <div className="dashboardUser">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static z-10">
                        <Navbar />
                    </div>
                    <div className="w-full flex flex-col md:flex-row z-0">
                        <div className="w-full md:max-w-[350px]">
                            <InfoUser usuario={usuario} cambioClases={setRegistroCambioClases} infoCambioClases={registroCambioClases} />
                        </div>
                        <div className="w-full">
                            <div className="listaCuentas p-2">
                                <div className="w-full bg-[var(--color-principal-light)] rounded-md flex flex-wrap p-2 gap-2 items-center justify-center">
                                    {
                                        cuentas.length > 0 ?
                                            cuentas.map((cuenta) => (
                                                <button key={cuenta.id_cuenta} onClick={() => window.location.href = "user?id=" + urlParams.get('id') + "&cuenta=" + cuenta.id_cuenta} className="border px-2 rounded-md">{cuenta.invocador}</button>
                                            )) :
                                            console.log("no hay cuentas, hay que añadir prompt")
                                    }
                                </div>
                            </div>
                            {
                                cuentas.length > 0 ?
                                    urlParams.get('cuenta') == null ? (<><HistorialElo id={cuentas[0].id_cuenta} /><GraficaElo id={cuentas[0].id_cuenta} /><HistorialClases cambioClases={registroCambioClases} /></>) : (<><HistorialElo id={urlParams.get('cuenta')} /><GraficaElo id={urlParams.get('cuenta')} /><HistorialClases cambioClases={registroCambioClases} /></>)
                                    :
                                    (<div>Nada configurado</div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardUser;