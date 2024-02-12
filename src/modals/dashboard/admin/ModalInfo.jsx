const ModalInfo = ({ modalInfo, usuario, visible }) => {
    return (
        visible &&
        <div className="dialog-container">
            <div className="dialog-overlay" onClick={() => { modalInfo(false) }}></div>
            <div className="dialog-content">
                <button className="dialog-close flex justify-center items-center">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h1 className="pb-8">Información {usuario.nombre}</h1>

                <form>
                    <div className="w-full bg-red">
                        <p className="font-[500] text-xl">Nombre</p>
                        <p>{usuario.nombre}</p>
                    </div>
                    <div className="w-full">
                        <p className="font-[500] text-xl">Clases completadas</p>
                        <p>0</p>
                    </div>
                    <div className="w-full bg-red">
                        <p className="font-[500] text-xl">Clases restantes</p>
                        <p>0</p>
                    </div>
                    <div className="w-full">
                        <p className="font-[500] text-xl">Dinero gastado</p>
                        <p>{0 + "€"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalInfo;