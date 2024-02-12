const Notas = () => {
    return (
        <>
            <div className="modalInfo panelClase w-full flex items-center p-4">
                <div className="w-full bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div className="flex items-center gap-1">
                            <button><i className="gg-arrow-left"></i></button>
                            <p className="text-white text-xl">Clase 1</p>
                        </div>
                        <button className="h-full" onClick={() => {document.querySelector(".panelClase").classList.add("hidden")}}>X</button>
                    </div>
                    <div className="w-full h-[400px] flex gap-4 items-center p-4 overflow-x-scroll relative">
                        <button className="absolute top-0 right-0 border m-2 px-4  bg-[var(--color-texto-dashboard)] flex items-center gap-1">
                            <p>Agregar</p>
                            <i className="gg-add-r"></i>
                        </button>
                        <div className="min-w-[300px] max-w-[300px] h-[300px] bg-[var(--color-texto-dashboard)] rounded-md flex flex-col p-2 overflow-y-scroll notaIndividual">
                            <h1 className="text-2xl">ASUNTO</h1>
                            <p className="text-[1rem] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius necessitatibus natus incidunt sint perferendis tempore quos ab libero veniam voluptas modi qui fugit reiciendis dolorem neque, corrupti similique iusto explicabo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notas;