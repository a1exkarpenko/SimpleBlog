import React, { FC } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './MainLayout.scss'

const MainLayout: FC = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout