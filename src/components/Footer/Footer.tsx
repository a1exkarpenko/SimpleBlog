import React, {FC} from "react"
import { NavLink } from "react-router-dom"
import './Footer.scss'

const Footer: FC = () =>{
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__nav">
                    <NavLink to="/" className="footer__title">SimpleBlog</NavLink>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <NavLink to="/" className="footer__link">Все посты</NavLink>
                        </li>
                        <li className="footer__item">
                            <NavLink to="/create-post" className="footer__link">Создать пост</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer