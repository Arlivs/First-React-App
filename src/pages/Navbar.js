import {Link} from "react-router-dom";
export const Navbar = () => (
    <header className="header navbar">
        <div className="header-logo">
            <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
        </div>
        <nav className="header-nav">
            <Link to="/" className="header-nav_item _info">Домой</Link>
            <Link to="/info" className="header-nav_item _help">Инфо</Link>
            <Link to="/comp2" className="header-nav_item _updates">Компонент 2</Link>
            <a href="/" className="header-nav_item _contacts">Контакты</a>
        </nav>
        <div className="registr">
            <button className="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </header>
)