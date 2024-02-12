import { useEffect, useState } from 'react'
import axios from 'axios'

import { Toaster, toast } from 'sonner'

export default function HistorialClases({ cambioClases }) {

    const [clasesProximas, setClasesProximas] = useState([])
    const [clasesCompletadas, setClasesCompletadas] = useState([])

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/coaching/pendientes/usuario=" + JSON.parse(localStorage.getItem("usuario"))["id_usuario"]).then((lista) => {
            setClasesProximas(lista.data)
            axios.get("https://bellumserver.netlify.app/.netlify/functions/api/coaching/completadas/usuario=" + JSON.parse(localStorage.getItem("usuario"))["id_usuario"]).then((lista) => {
                setClasesCompletadas(lista.data)
                setCargando(false)
            })
        })
    }, [cambioClases])

    if (cargando)
        return (
            <div className="historialClases p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px]">
                        <p className="pl-2">Clases</p>
                    </div>
                    <div className="w-full h-[460px] flex items-center p-2 overflow-y-scroll">
                        <div className="loaderRing"></div>
                    </div>
                </div>
            </div>
        )

    return (
        <>
            {console.log("vamossssss")}
            <Toaster richColors closeButton />
            <div className="historialClases p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] flex items-center">
                        <p className="pl-2 mt-2">Clases</p>
                    </div>
                    <div className="w-full h-[460px] grid grid-cols-1 gap-2 p-2 overflow-y-scroll">
                        {clasesProximas.map((clase => (
                            <div key={clase.id_sesion} className="w-full h-[70px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between rounded-md transition-all showNewClase">
                                <div className="w-2/3 flex">
                                    <div className="w-[50px] flex items-center justify-center numeroClase">
                                        <p><i className="fa-solid fa-hourglass-start text-yellow-300"></i></p>
                                    </div>
                                    <div className="w-[100%] flex flex-col pl-4">
                                        <div className="flex items-center w-full h-[30px]">
                                            <p className="text-xl">{clase.fecha.substring(8, 10) + "/" + clase.fecha.substring(5, 7) + "/" + clase.fecha.substring(0, 4)}</p>
                                            <p className="ml-3 text-xl">{clase.hora}</p>
                                        </div>
                                        <a href={"/user?id=" + clase.id_coach} className="text-[var(--color-secundario)] w-[10px]">{clase.nombre}</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-4 w-[70px] pr-8">
                                    <a href={("/notas?clase=" + clase.id_sesion)} className="w-[30px] h-[30px] flex items-center justify-center hover:text-[var(--color-secundario)] text-[var(--fondo-blanco)]">
                                        <i className="fa-solid fa-circle-info transition-colors"></i>
                                    </a>
                                    {
                                        clase.ping ? (
                                            <button onClick={() => {
                                                toast.error('El ping ya está creado')
                                            }} className="w-[30px] h-[30px] flex items-center justify-center text-orange-300 text-[var(--fondo-blanco)]">
                                                <i className="fa-solid fa-bell transition-colors"></i>
                                            </button>
                                        ) : (
                                            <button onClick={() => {
                                                toast.promise(() => new Promise((resolve, reject) => {
                                                    axios.put("https://bellumserver.netlify.app/.netlify/functions/api/coaching/ping", { "idClase": clase.id_sesion }).then(function (response) {
                                                        resolve()
                                                        document.getElementById("botonPings").style.color = "#fdba74"
                                                    }).catch(function () {
                                                        reject()
                                                    })
                                                }), {
                                                    loading: 'Creando ping',
                                                    success: 'Ping creado',
                                                    error: 'Error',
                                                });
                                            }} className="w-[30px] h-[30px] flex items-center justify-center hover:text-orange-300 text-[var(--fondo-blanco)]" id='botonPings'>
                                                <i className="fa-solid fa-bell transition-colors"></i>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        )))}
                        {clasesCompletadas.map((clase => (
                            <div key={clase.id_sesion} className="w-full h-[70px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between rounded-md">
                                <div className="w-2/3 flex">
                                    <div className="w-[50px] flex items-center justify-center numeroClase">
                                        <p><i className="fa-solid fa-check text-green-500"></i></p>
                                    </div>
                                    <div className="w-[100%] flex flex-col pl-4">
                                        <div className="flex items-center w-full h-[30px]">
                                            <p className="text-xl">{clase.fecha.substring(8, 10) + "/" + clase.fecha.substring(5, 7) + "/" + clase.fecha.substring(0, 4)}</p>
                                            <p className="ml-3 text-xl">{clase.hora}</p>
                                        </div>
                                        <a href={"/user?id=" + clase.id_coach} className="text-[var(--color-secundario)] w-[10px]">{clase.nombre}</a>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-4 w-[70px] pr-8">
                                    <a href={("/notas?clase=" + clase.id_sesion)} className="w-[30px] h-[30px] flex items-center justify-center hover:text-[var(--color-secundario)] text-[var(--fondo-blanco)]">
                                        <i className="fa-solid fa-circle-info transition-colors"></i>
                                    </a>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </>
    )
}