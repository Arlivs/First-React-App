import { BrowserRouter, Link, Route} from "react-router-dom";
import Home from "./Home";
import Comp2 from "./items2/comp2";
import Comp3 from "./items2/comp3";

function Info(props) {
    const listItem = Array.from(props.data).map(el => <Link to={el.href}>{el.title}</Link>)
    return(
    <>
    <section className="info-body">
        <div className="container">
            <div className="info-header">
                <p className="info-title">
                    Here you can search all information about this application
                </p>
                <ul style={{textAlign: "left"}}>
                    {listItem}
                    <Link to="/">lalalala home</Link>
                </ul>
            </div>
        </div>
    </section>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/info/comp2">
            <Comp2/>
        </Route>
        <Route path="/info/comp3">
            <Comp3/>
        </Route>
    </>
    )
}
export default Info;