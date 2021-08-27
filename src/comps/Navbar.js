import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Info from "./Info"
import Register from "./Reg"
import Banner from "./Home";
import SimpleComp from "./SimpleComp";
import "../css/style.css"


export default function Navbar() {
    return (
    <Router>
    <section className="header">
        <div className="header-logo">
            <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
        </div>
        <nav className="header-nav">
            <Link to="/" className="header-nav_item _info">Домой</Link>
            <Link to="/info" className="header-nav_item _help">Информация</Link>
            <Link to="/simple" className="header-nav_item _updates">Два</Link>
            <a className="header-nav_item _contacts">Контакты</a>
        </nav>
        <div className="registr">
            <button className="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </section>
        <Switch>
            <Route exact path="/info" component={Info}></Route>
            <Route exact path="/" component={Banner}></Route>
            <Route exact path="/login" component={Register}></Route>
            <Route exact path="/simple" component={SimpleComp}></Route>
        </Switch>
    </Router>
    )
}