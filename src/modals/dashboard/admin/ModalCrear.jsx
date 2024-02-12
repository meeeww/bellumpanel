const ModalCrear = ({ modalCrear }) => {
    return (
        <div className="dialog-container">
            <div className="dialog-overlay" onClick={() => { modalCrear(false) }}></div>
            <div className="dialog-content">
                <button className="dialog-close flex justify-center items-center" onClick={() => { modalCrear(false) }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h1 className="pb-8">Crear Usuario</h1>

                <form>
                    <div className="w-full bg-red">
                        <p>Nombre </p>
                        <input type="text" placeholder="zaskf" className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <div className="w-full">
                        <p>Permisos </p>
                        <input type="email" placeholder="zas@gmail.com" className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <button type="submit" name="button" className="mt-4 px-2 p-1 confirmButton">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalCrear;