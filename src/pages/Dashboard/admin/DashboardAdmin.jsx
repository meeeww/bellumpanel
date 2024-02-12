import { useEffect, useState } from 'react'
import checkSession from '../../../scripts/sessionManager'

import Header from "./HeaderAdmin";
import UserList from "./UserList";
import Navbar from "./Navbar";
import Calendario from "./Calendario";

const DashboardAdmin = () => {

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        checkSession()
        setCargando(false)
    }, [])

    if (cargando)
        return (<div className="loaderRing"></div>)

    return (
        <>
            <div className="dashboardAdmin">
                <Header />
                <div className="flex navbarContainer">
                    <div className="fixed lg:static">
                        <Navbar />
                    </div>
                    <div className="w-full">
                        <UserList />
                    </div>

                </div>

            </div>
        </>
    )
}

export default DashboardAdmin;