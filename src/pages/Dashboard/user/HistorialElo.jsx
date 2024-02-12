import { useEffect, useState } from 'react'
import axios from 'axios'

export default function HistorialElo({ id }) {

    const [eloInicial, setEloInicial] = useState()
    const [eloActual, setEloActual] = useState()
    const [eloMaximo, setEloMaximo] = useState()
    const [eloHistorial, setEloHistorial] = useState()

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/inicial=" + id).then((elo) => {
            setEloInicial(elo.data[0])
            axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/actual=" + id).then((elo) => {
                setEloActual(elo.data[0])
                axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial/maximo=" + id).then((elo) => {
                    setEloMaximo(elo.data[0])
                    axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial=" + id).then((elo) => {
                        setEloHistorial(elo.data[0])
                        setCargando(false)
                    })
                })
            })
        })

    }, [])

    if (cargando)
        return (
            <div className="historialElo p-2">
                <div className="rounded-md w-full bg-[var(--color-principal-light)] grid p-2 gap-4">
                    <div className="loaderRing"></div>
                </div>
            </div>
        )

    return (
        <>
            <div className="historialElo p-2">
                <div className="rounded-md w-full bg-[var(--color-principal-light)] grid p-2 gap-4">
                    <div className="w-full h-[120px] flex items-center justify-between rounded-md p-2" style={{ backgroundImage: "url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-" + (eloInicial.division).toLowerCase() + ".png)", backgroundSize: "60rem", backgroundPosition: "center" }}>
                        <div><h1>Elo Inicial</h1></div>
                        <div className='text-xl'>
                            <p>{eloInicial.division.charAt(0).toUpperCase() + eloInicial.division.slice(1).toLowerCase() + " " + eloInicial.rango.toUpperCase()}</p>
                            <p>{eloInicial.lps + "LPs"}</p>
                            <p>{eloInicial.fecha.substring(8, 10) + "/" + eloInicial.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between rounded-md p-2" style={{ backgroundImage: "url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-" + (eloActual.division).toLowerCase() + ".png)", backgroundSize: "60rem", backgroundPosition: "center" }}>
                        <div><h1>Elo Actual</h1></div>
                        <div className='text-xl'>
                            <p>{eloActual.division.charAt(0).toUpperCase() + eloActual.division.slice(1).toLowerCase() + " " + eloActual.rango.toUpperCase()}</p>
                            <p>{eloActual.lps + "LPs"}</p>
                            <p>{eloActual.fecha.substring(8, 10) + "/" + eloActual.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                    <div className="w-full h-[120px] flex items-center justify-between rounded-md p-2" style={{ backgroundImage: "url(https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-" + (eloMaximo.division).toLowerCase() + ".png)", backgroundSize: "60rem", backgroundPosition: "center" }}>
                        <div><h1>Elo Máximo</h1></div>
                        <div className='text-xl'>
                            <p>{eloMaximo.division.charAt(0).toUpperCase() + eloMaximo.division.slice(1).toLowerCase() + " " + eloMaximo.rango.toUpperCase()}</p>
                            <p>{eloMaximo.lps + "LPs"}</p>
                            <p>{eloMaximo.fecha.substring(8, 10) + "/" + eloMaximo.fecha.substring(5, 7)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}