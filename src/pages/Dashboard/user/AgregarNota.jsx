const AgregarNota = () => {
    return (
        <>
            <div className="modalEditar agregarNota flex items-center justify-center p-4 w-full md:w-auto">
                <div className="md:w-[350px] w-full bg-[var(--color-principal-light)]">
                    <div className="w-full h-[40px] bg-[var(--color-fondo-dashboard)] flex items-center justify-between px-4">
                        <div><p className="text-white text-xl">Agregar nota</p></div>
                        <button className="h-full" onClick={() => {document.querySelector(".modalEditar").classList.add("hidden")}}>X</button>
                    </div>
                    <div className="flex flex-col gap-4 w-full h-full p-4">
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Asunto: </p>
                            <input type="text" placeholder="" className="w-[150px] text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-texto-dashboard)]" />
                        </div>
                        <div className="flex gap-2 w-full">
                            <p className="text-white">Nota: </p>
                            <textarea type="textarea"  className="w-[200px] h-[150px] text-[1rem] pl-1 bg-[var(--color-principal-light)] text-[var(--color-texto-dashboard)] resize-none" />
                        </div>
                        <button className="bg-[var(--color-texto-dashboard)] rounded-md mt-8">Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgregarNota;