const ModalBorrar = ({ modalBorrar, usuario, visible }) => {
    return (
        visible &&
        <div className="dialog-container">
            <div className="dialog-overlay" onClick={() => { modalBorrar(false) }}></div>
            <div className="dialog-content">
                <button className="dialog-close flex justify-center items-center">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h1 className="pb-8">Borrar {usuario.nombre}</h1>

                <form className="mt-4">
                    <div className="flex items-center justify-center w-full">
                        <input type={"checkbox"} className="w-[20px] h-[25px] mr-8"></input>
                        <p>¿Estás seguro de que quieres eliminar a este usuario?</p>
                    </div>
                    <button type="submit" name="button" className="p-1 confirmButton">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default ModalBorrar;