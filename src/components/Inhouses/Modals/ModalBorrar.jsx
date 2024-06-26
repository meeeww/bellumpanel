import { useState } from "react";

import { eliminarEquipo } from "../../../services/equipos";

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Checkbox } from "@nextui-org/react";
import { toast } from 'sonner'

export default function ModalEquipos(equipo) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [confirmacion, setConfirmacion] = useState(false)

    const cambiarConfirmacion = () => {
        setConfirmacion(!confirmacion)
    }

    const confirmarBorracion = () => {
        toast.promise(() => new Promise((resolve, reject) => {
            eliminarEquipo(equipo["equipo"].id_equipo, resolve, reject, equipo.cambioDatos, equipo.setCambioDatos)
        }), {
            loading: 'Borrando equipo',
            success: 'Equipo borrado',
            error: 'Error',
        });
    }

    return (
        <>
            <Button onClick={onOpen} onPress={() => { setConfirmacion(false) }} size="sm" isIconOnly aria-label="Borrar" color="danger"><i className="fa-solid fa-trash"></i></Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Eliminar Equipo</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col justify-center gap-2 mb-8">
                                    <Checkbox onChange={cambiarConfirmacion} id="checkBoxConfirmacion">¿Estás seguro de que quieres eliminar el equipo?</Checkbox>
                                </div>
                                <div className="flex justify-evenly">
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Cerrar
                                    </Button>
                                    <Button color="primary" onPress={onClose} onClick={() => {
                                        if (confirmacion) {
                                            confirmarBorracion()
                                            setConfirmacion(false)
                                        } else {
                                            toast.error('No has confirmado.')
                                            setConfirmacion(false)
                                        }
                                    }}>
                                        Confirmar
                                    </Button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
