import { useEffect, useState } from 'react'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-[var(--color-principal-light)] p-4">
                <p className="text-[var(--color-secundario)] text-[1.6rem] py-2">{payload[0]["payload"]["Rango"]}</p>
                <p className="text-[var(--color-secundario)] text-2xl">Fecha</p>
                <p className="text-[var(--color-principal-dark)] text-lg">{label}</p>
                <p className="text-[var(--color-secundario)] text-2xl">Elo</p>
                <p className="text-[var(--color-principal-dark)] text-lg">{payload[0].value}</p>
            </div>
        );
    }

    return null;
};

export default function GraficaElo({ id }) {

    const [historial, setHistorial] = useState([])
    const [cargando, setCargando] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/historial=" + id).then((historial) => {
            setHistorial(historial.data)
            setCargando(false)

            let listaHistorial = []
            let listaTemporal = []//[["Fecha", "Elo Total",]]

            historial.data.forEach((historialSingular) => {
                // setData([...data, [
                //     [
                //         "Day",
                //         "Guardians of the Galaxy",
                //     ],
                //     [historialSingular.fecha.substring(8, 10) + "/" + historialSingular.fecha.substring(5, 7), 37.8],
                // ]])
                // console.log(data)
                listaHistorial.push(historialSingular)
            })
            //console.log(listaHistorial[0])

            listaHistorial.forEach((historialRangos) => {
                let elo = 0
                switch (historialRangos.division) {
                    case "CHALLENGER":
                        elo = elo + 3200
                        break;
                    case "GRANDMASTER":
                        elo = elo + 3200
                        break;
                    case "MASTER":
                        elo = elo + 2800
                        break;
                    case "DIAMOND":
                        elo = elo + 2400
                        break;
                    case "EMERALD":
                        elo = elo + 2000
                        break;
                    case "PLATINUM":
                        elo = elo + 1600
                        break;
                    case "GOLD":
                        elo = elo + 1200
                        break;
                    case "SILVER":
                        elo = elo + 800
                        break;
                    case "BRONZE":
                        elo = elo + 400
                        break;
                }
                switch (historialRangos.rango) {
                    case "I":
                        elo = elo + 300
                        break;
                    case "II":
                        elo = elo + 200
                        break;
                    case "III":
                        elo = elo + 100
                        break;
                }
                elo = elo + historialRangos.lps
                listaTemporal.push({ Fecha: historialRangos.fecha.substring(8, 10) + "/" + historialRangos.fecha.substring(5, 7), Elo: elo, Rango: historialRangos.division + " " + historialRangos.rango })
            })
            console.log(listaTemporal)
            setData(listaTemporal)
        })

    }, [])

    if (cargando)
        return (
            <div className="graficaElo p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)] flex items-center">
                    <div className="loaderRing"></div>
                </div>
            </div>
        )

    return (
        <>
            <div className="graficaElo p-2">
                <div className="rounded-md w-full h-[500px] bg-[var(--color-principal-light)]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={800}
                            data={data}
                            margin={{
                                top: 80,
                                right: 40,
                                left: 40,
                                bottom: 80,
                            }}
                        >
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="Fecha" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="Elo" stroke="#00B3FF" activeDot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </>
    )
}