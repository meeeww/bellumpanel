const ModalEditar = ({ modalEditar, usuario, visible }) => {
    return (
        visible &&
        <div className="dialog-container">
            <div className="dialog-overlay" onClick={() => { modalEditar(false) }}></div>
            <div className="dialog-content">
                <button className="dialog-close flex justify-center items-center">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h1 className="pb-8">Editar {usuario.nombre}</h1>

                <form>
                    <div className="w-full bg-red">
                        <p>Nombre</p>
                        <input type="text" placeholder={usuario.nombre} className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <div className="w-full">
                        <p>Discord</p>
                        <input type="email" placeholder={usuario.discord} className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <div className="w-full bg-red">
                        <p>Permisos</p>
                        <input type="text" placeholder={usuario.permisos} className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <div className="w-full">
                        <p>Contraseña</p>
                        <input type="password" placeholder="········" className="text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-principal-dark)]" />
                    </div>
                    <button type="submit" name="button" className="mt-4 px-2 p-1 confirmButton">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalEditar;