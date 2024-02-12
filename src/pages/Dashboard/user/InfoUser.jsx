import { useState, useEffect } from "react"
import axios from 'axios'

import ModalCrear from "../../../modals/dashboard/clases/ModalCrear";

export default function InfoUser({ usuario, cambioClases, infoCambioClases }) {

    const [modalCrear, setModalCrear] = useState(false)

    const [listaCoaches, setListaCoaches] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios/coaches").then((coaches) => {
            setListaCoaches(coaches.data)
            setCargando(false)
        })
    }, [])

    if (cargando)
        return (
            <div className="infoUser p-2 w-full">
                <div className="bg-[var(--color-principal-light)] rounded-md w-full h-[400px] relative">
                    <div className="flex items-center justify-center w-full h-full"><div className="loaderRing2"></div></div>
                </div>
            </div>
        )

    return (
        <>
            <div className="infoUser p-2 w-full">
                <div className="bg-[var(--color-principal-light)] rounded-md w-full h-[400px] relative pt-4">
                    <div className="w-full h-[150px] flex items-center justify-center">
                        <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + usuario.icono + ".jpg"} alt="Image" className="w-[120px] h-[120px] bg-black rounded-[50%]" />
                    </div>
                    <div className="w-full h-[250px] ">
                        <div className="w-full h-[50px] flex flex-col items-center justify-center mt-4">
                            <h1>{usuario.nombre}</h1>
                            <div className='flex items-center gap-1'>
                                <h1>{usuario.discord}</h1>
                                <i className="fa-brands fa-discord pl-2 text-[var(--color-secundario)]"></i>
                            </div>
                        </div>
                        <div className='w-full mt-4 flex items-center justify-center'>
                            <h1>{(() => {
                                switch (usuario.permisos) {
                                    case 1:
                                        return <p>Privilegiado</p>
                                    case 2:
                                        return <p>Coach</p>
                                    case 3:
                                        return <p>Desarrollador</p>
                                    case 4:
                                        return <p>Administrador</p>
                                    default:
                                        return <p>Usuario</p>
                                }
                            })()}</h1>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 flex items-center gap-2 p-2'>
                        <button onClick={() => { setModalCrear(true) }}><i className="fa-solid fa-graduation-cap hover:text-[var(--color-secundario)] transition-all"></i></button>
                        <button href="#"><i className="fa-solid fa-up-right-from-square hover:text-[var(--color-secundario)] transition-all"></i></button>
                    </div>
                    {modalCrear && <ModalCrear modalCrear={setModalCrear} coaches={listaCoaches} usuario={usuario} cambioClases={cambioClases} infoCambioClases={infoCambioClases} />}
                </div>
            </div>
        </>
    )
}