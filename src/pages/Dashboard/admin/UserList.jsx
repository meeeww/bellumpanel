import { useEffect, useState } from 'react'
import axios from 'axios'

import ModalCrear from "../../../modals/dashboard/admin/ModalCrear";
import ModalEditar from "../../../modals/dashboard/admin/ModalEditar";
import ModalBorrar from "../../../modals/dashboard/admin/ModalBorrar";
import ModalInfo from "../../../modals/dashboard/admin/ModalInfo";

function UserList() {

    const [listaUsuarios, setListaUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)

    const [modalCrear, setModalCrear] = useState(false)
    const [modalInfo, setModalInfo] = useState(false)
    const [modalEditar, setModalEditar] = useState(false)
    const [modalBorrar, setModalBorrar] = useState(false)
    const [modalUsuario, setModalUsuario] = useState([])

    useEffect(() => {
        axios.get("https://bellumserver.netlify.app/.netlify/functions/api/usuarios").then((usuarios) => {
            setListaUsuarios(usuarios.data)
            setCargando(false)
        })
    }, [])

    if (cargando)
        return (
            <div className="userList p-4">
                <div className="w-full h-screen rounded-md">
                    <div className="w-full h-[50px] bg-[var(--color-principal-light)] userListheader flex items-center pl-4">
                        <p className="text-white">Lista de Usuarios</p>
                    </div>
                    <ul className="flex flex-col w-full h-full overflow-x-scroll">
                        <div className="loaderRing"></div>
                    </ul>
                </div>
            </div>
        )

    return (
        <>
            <div className="userList p-4">
                <div className="w-full h-screen rounded-md">
                    <div className="w-full h-[50px] bg-[var(--color-principal-light)] userListheader flex items-center px-4 justify-between">
                        <p className="text-white">Lista de Usuarios</p>
                        <button onClick={() => { setModalCrear(true) }}><i className="fa-solid fa-plus hover:rotate-90 transition-all"></i></button>
                    </div>
                    <ul className="flex flex-col w-full">
                        {listaUsuarios &&
                            listaUsuarios.map((usuario) => (
                                <li className="w-full h-[80px] flex items-center justify-between pr-4 pl-2" key={usuario.id_usuario}>
                                    <div className='flex lg:w-[35%] w-[80%]'>
                                        <a href={'/user?id=' + usuario.id_usuario}><img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + usuario.icono + ".jpg"} alt="Image" className="w-[70px] rounded-[50%] hover:scale-105 transition-all" /></a>
                                        <div className='ml-4'>
                                            <p className='text-white text-2xl'>{usuario.nombre}</p>
                                            <p className='text-[var(--color-texto-dashboard)]'><i className="fa-brands fa-discord pr-2 text-[var(--color-secundario)]"></i>{usuario.discord}</p>
                                        </div>
                                    </div>
                                    <div className='hidden lg:block w-[25%]'>
                                        <p className='text-[var(--color-texto-dashboard)]'>{(() => {
                                            switch (usuario.permisos) {
                                                case 1:
                                                    return "Privilegiado"
                                                case 2:
                                                    return "Coach"
                                                case 3:
                                                    return "Desarrollador"
                                                case 4:
                                                    return "Administrador"
                                                default:
                                                    return "Usuario"
                                            }
                                        })()}</p>
                                    </div>
                                    <div className='hidden lg:block'>
                                        <p className='text-[var(--color-texto-dashboard)]'>10 clases restantes</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button className='bg-blue-500 h-[30px] w-[30px] flex items-center justify-center rounded-md buttonHoverDashboard' onClick={() => { setModalInfo(true); setModalUsuario(usuario) }}><i className="fa-solid fa-info"></i></button>
                                        <button className='bg-green-500 h-[30px] w-[30px] flex items-center justify-center rounded-md buttonHoverDashboard' onClick={() => { setModalEditar(true); setModalUsuario(usuario) }}><i className="fa-solid fa-hammer"></i></button>
                                        <button className='bg-red-500 h-[30px] w-[30px] flex items-center justify-center rounded-md buttonHoverDashboard' onClick={() => { setModalBorrar(true); setModalUsuario(usuario) }}><i className="fa-solid fa-xmark"></i></button>
                                    </div>
                                    <ModalInfo modalInfo={setModalInfo} usuario={modalUsuario} visible={modalInfo} />
                                    <ModalEditar modalEditar={setModalEditar} usuario={modalUsuario} visible={modalEditar} />
                                    <ModalBorrar modalBorrar={setModalBorrar} usuario={modalUsuario} visible={modalBorrar} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {modalCrear && <ModalCrear modalCrear={setModalCrear} />}
        </>
    )
}


export default function Users() {
    const [show, setShow] = useState(false)

    useEffect(function () {
        const onChange = (entries) => {
            const elemento = entries[0]
            if (elemento.isIntersecting) {
                setShow(true)
            }
        }


        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById("LazyUsers"))
    })

    return <div id='LazyUsers'>
        {show ? <UserList /> : null}
    </div>
}