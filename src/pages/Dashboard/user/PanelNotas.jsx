import axios from "axios";
import { useEffect, useState } from "react";
import checkSession from '../../../scripts/sessionManager'

import Notas from "./Notas";
import React from 'react'
import Header from "../admin/HeaderAdmin";
import Navbar from "../admin/Navbar";
import PanelClase from "./PanelClase";
import AgregarNota from './AgregarNota';
import InfoUser from './InfoUser';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const PanelNotas = () => {

    const [usuario, setUsuario] = useState([])
    const [coach, setCoach] = useState([])
    const [clase, setClase] = useState([])
    const [rango, setRango] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        checkSession()
        if (cargando) {
            axios.get("https://bellumserver.netlify.app/.netlify/functions/api/coaching/clase=" + urlParams.get('clase')).then((clase) => {
                setClase(clase.data[0])
                axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios/id=" + clase.data[0]["id_usuario"]).then((tCliente) => {
                    setUsuario(tCliente.data[0])
                    axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios/id=" + clase.data[0]["id_coach"]).then((tUsuarios) => {
                        setCoach(tUsuarios.data[0])
                        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/id=" + clase.data[0]["id_usuario"] + "&fecha=" + clase.data[0].fecha).then((tRango) => {
                            setRango(tRango.data[0])
                            setCargando(false)
                        })
                    })
                    //
                })
            })
        }
    }, [])

    if (cargando)
        return (<div className="h-[100vh] flex items-center"><div className="loaderRing"></div></div>)

    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static">
                        <Navbar />
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <div className="flex items-center md:justify-between flex-col md:flex-row">
                            <InfoUser usuario={usuario} />
                            <PanelClase />

                            <InfoUser usuario={coach} />
                        </div>
                        <div className="h-full w-full">
                            <AgregarNota />
                            <Notas />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PanelNotas;