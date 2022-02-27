import React, { FC, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './Header.scss'


const Header: FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)

    const burgerHandle = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

    useEffect(() => {
        if (window.innerWidth < 767)
            setIsMobile(true)
        else
            setIsMobile(false)
    }, [])

    if (isMobile)
        return (
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <NavLink to="/" className="header__title">SimpleBlog</NavLink>
                        <div className={isBurgerOpen ? "burger burger-open" : "burger"}
                            onClick={burgerHandle}>
                            <span className="burger__line up"></span>
                            <span className="burger__line middle"></span>
                            <span className="burger__line bottom"></span>
                        </div>
                    </nav>
                </div>

                <ul className={isBurgerOpen ? "mobile-header__list burger-open" : "mobile-header__list"}>
                    <li className="mobile-header__item">
                        <NavLink to={'/'} 
                            className="mobile-header__link"
                            onClick={burgerHandle}>Все посты</NavLink>
                    </li>
                    <li className="mobile-header__item">
                        <NavLink to={'/create-post'} 
                        className="mobile-header__link"
                        onClick={burgerHandle}>Создать пост</NavLink>
                    </li>
                </ul>
            </header>
        )

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink to={'/'} className="header__link">Все посты</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to={'/create-post'} className="header__link">Создать пост</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/" className="header__title">SimpleBlog</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header