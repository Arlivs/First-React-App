import {Navbar} from "./pages/Navbar";
import Comp1 from "./comps/items2/comp1"
import Comp2 from "./comps/items2/comp2"
import Info from "./pages/Info"
import Register from "./pages/Reg"
import Banner from "./pages/Home";
import "./css/style.css"
import { BrowserRouter, Route } from "react-router-dom";

const data = [
    {title: "lala1", href:"/info/comp1"},
    {title: "lala2", href:"/comp2"},
]
export const App = () =>(
    <BrowserRouter>
        <Navbar/>
    <Route path="/info/comp1"><Comp1/>
    </Route>
    <Route path="/comp2"><Comp2/>
    </Route>
    <Route path="/info"><Info data={data}/>
    </Route>
    <Route exact path="/"><Banner/>
    </Route>
    <Route path="/comp2"><Comp2/>
    </Route>
    <Route exact path="/login"><Register/>
    </Route>
    </BrowserRouter>
)