export default function RegData() {
    return (
        <>
            <form className="reg__data">
                <div className="login-box data-box">
                    <label htmlFor="reg__login" className="label login-label">Login:</label>
                    <input type="text" className="input" id="reg-login" autoComplete="off"/>
                </div>
                <div className="pass-box data-box">
                    <label htmlFor="reg__pass" className="label pass-label">Password:</label>
                    <input type="password" className="input" id="rep-pass" autoComplete="off"/>
                </div>
                <button className="reg-submit" type="submit">Submit</button>
            </form>
        </>
    )
}