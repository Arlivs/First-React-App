import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Info from "./Info"
import SecondComp from './SecondComp';
import FirstComp from './FirstComp';
import Register from "./reg"
import "./css/index.css"
import "./css/style.css"
import "./css/login.css"

function Header() {
    return (
    <Router>
    <section class="header">
        <div class="header-logo">
            <Link to="/">Purchase - <span class="header-logo_note">Note</span></Link>
        </div>
        <nav class="header-nav">
            <Link to="/info" class="header-nav_item _info">Информация</Link>
            <Link to="/first" class="header-nav_item _help">Один</Link>
            <Link to="/second" class="header-nav_item _updates">Два</Link>
            <Link class="header-nav_item _contacts">Контакты</Link>
        </nav>
        <div class="registr">
            <button class="registr-btn"><Link to="/login">Регистрация</Link></button>
        </div>
    </section>
        <Switch>
            <Route exact path="/info" component={Info}></Route>
            <Route exact path="/login" component={Register}></Route>
            <Route exact path="/first" component={FirstComp}></Route>
            <Route exact path="/second" component={SecondComp}></Route>
        </Switch>
    </Router>
    )
}
export default Header;