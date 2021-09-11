import {BrowserRouter, Link, Route} from "react-router-dom";
import Comp2 from "../comps/items2/comp2"
import Info from "./Info"
import Register from "./Reg"
import {Home} from "./Home";

const data = [
    {title: "lala1", href:"/info/comp1"},
    {title: "lala2", href:"/comp2"},
]

export const Navbar = () => (
<BrowserRouter>
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
        <Route path="/comp2">
            <Comp2/>
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/login">
            <Register/>
        </Route>
        <Route path="/info">
            <Info data={data}/>
        </Route>
</BrowserRouter>
)