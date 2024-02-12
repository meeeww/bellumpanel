const PanelClase = () => {
    return (
        <>
            <div className="modalInfo panelClase flex items-center p-4 w-full md:w-full md:mx-16">
                <div className="md:w-[100%] w-full h-[100%] bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Información</p></div>
                        <button className="h-full" onClick={() => { document.querySelector(".modalInfo").classList.add("hidden") }}>X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Clase: </p>
                            <p className="text-[var(--color-texto-dashboard)]">1</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Cliente: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zas</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Coach: </p>
                            <p className="text-[var(--color-texto-dashboard)]">zas</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Puntuación: </p>
                            <p className="text-[var(--color-texto-dashboard)]">10/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelClase;