import {Link} from "react-router-dom"
import "../css/login.css"
import RegData from "./RegData"

function Register() {
    return(
        <>
        <section className="header">
            <div className="header-logo" style={{width:"100%"}}>
                <Link to="/">Purchase - <span className="header-logo_note">Note</span></Link>
            </div>
        </section>
        <section className="container">
            <div className="figure-word">We help to save your money</div>
            <div className="figure"></div>
            <div className="reg__title">Register</div>
            <RegData/>
            <p className="logined-p">You already registrated before? touch here</p>
        </section>
        </>
    )
}export default Register