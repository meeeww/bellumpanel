import axios from 'axios'

import { Toaster, toast } from 'sonner'

const ModalCrear = ({ modalCrear, coaches, usuario, cambioClases, infoCambioClases }) => {

    return (
        <div className="dialog-container">
            <Toaster richColors closeButton />
            <div className="dialog-overlay" onClick={() => { modalCrear(false) }}></div>
            <div className="dialog-content">
                <button className="dialog-close flex justify-center items-center" onClick={() => { modalCrear(false) }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h1 className="pb-8">Asignar Clase</h1>

                <form>
                    <div className="w-full">
                        <p>Nombre </p>
                        <select id="coachAsignado" className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" >
                            {
                                coaches &&
                                coaches.map((coach) => (
                                    <option key={coach.id_usuario} value={coach.id_usuario}>{coach.nombre}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-full">
                        <p>Fecha </p>
                        <input type="datetime-local" id="fechaAsignada" className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <button className="mt-4 px-2 p-1 confirmButton" onClick={(e) => {
                        e.preventDefault()
                        //
                        toast.promise(() => new Promise((resolve, reject) => {
                            axios.post("https://bellumserver.netlify.app/.netlify/functions/api/coaching/crear", { idCliente: usuario.id_usuario, idCoach: document.getElementById("coachAsignado").value, fecha: document.getElementById("fechaAsignada").value.substring(0, 10), hora: document.getElementById("fechaAsignada").value.substring(11, 16) }, { timeout: 10000, headers: { 'Content-Type': 'application/json' } }).then(function (response) {
                                cambioClases(infoCambioClases + 1)
                                resolve()
                            }).catch(function () {
                                reject()
                            })
                        }), {
                            loading: 'Creando clase',
                            success: 'Clase creada',
                            error: 'Error',
                        });
                    }}>Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCrear;