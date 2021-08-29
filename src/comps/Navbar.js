import { BrowserRouter as Router, Link, Route} from "react-router-dom";
import "../css/style.css"
import Info from "./Info"
import Register from "./Reg"
import Banner from "./Home";
import SimpleComp from "./SimpleComp";
const data = [
    {title: "lala1", href:"/login"},
    {title: "lala2", href:"/info"},
    {title: "lala3", href:"/"}
]

export default function Navbar() {
    return (
    <Router>
    <header className="header navbar">
        <div className="header-logo">
            <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
        </div>
        <nav className="header-nav">
            <Link to="/" className="header-nav_item _info">Домой</Link>
            <Link to="/info" className="header-nav_item _help">Информация</Link>
            <Link to="/simple" className="header-nav_item _updates">Компонент</Link>
            <a className="header-nav_item _contacts">Контакты</a>
        </nav>
        <div className="registr">
            <button className="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </header>
        <Route path="/info">
            <Info data={data}/>
        </Route>
        <Route exact path="/">
            <Banner/>
        </Route>
        <Route path="/simple">
            <SimpleComp/>
        </Route>
        <Route exact path="/login">
            <Register/>
        </Route>
    </Router>
    )
}