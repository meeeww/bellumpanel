import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar } from "@nextui-org/react";

const Header = () => {

    return (
        <>
            <div className="w-full h-[70px] flex items-center justify-between px-4 headerAdmin lg:static sticky top-[0px] z-50">
                <button className='menuButton' onClick={() => { document.querySelector(".navbar").classList.toggle("active") }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="flex items-center gap-4">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + JSON.parse(localStorage.getItem("usuario"))["icono"] + ".jpg"}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat" className="text-[var(--color-principal-light)]">
                            <DropdownItem key="profile" className="h-14 gap-2" onClick={() => {window.location = "/dashboardadmin"}}>
                                <p className="font-semibold">Sesión Iniciada</p>
                                <p className="font-semibold">{JSON.parse(localStorage.getItem("usuario"))["nombre"]}</p>
                            </DropdownItem>
                            <DropdownItem key="settings">
                                Ajustes
                            </DropdownItem>
                            <DropdownItem key="team_settings">Ajustes de Equipo</DropdownItem>
                            <DropdownItem key="analytics">
                                Analíticas
                            </DropdownItem>
                            <DropdownItem key="system">Calendario</DropdownItem>
                            <DropdownItem key="configurations">Creadores</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </>

    )
}

export default Header;