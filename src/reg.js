export default function Register() {
    return(
        <>
        <section class="header">
            <div class="header-logo">
                <a href="./index.html">Purchase - <span class="header-logo_note">Note</span></a>
            </div>
        </section>
        <section class="container">
            <div class="figure-word">We help to save your money</div>
            <div class="figure"></div>
            <div class="reg__title">Register</div>
            <form class="reg__data">
                <div class="login-box data-box">
                    <label for="reg__login" class="label login-label">Login:</label>
                    <input type="text" class="input" id="reg-login" autocomplete="off"/>
                </div>
                <div class="pass-box data-box">
                    <label for="reg__pass" class="label pass-label">Password:</label>
                    <input type="password" class="input" id="rep-pass" autocomplete="off"/>
                </div>
                <button class="reg-submit" type="submit">Submit</button>
            </form>
            <p class="logined-p">You already registrated before? <a href="" class="logined">touch here</a></p>
        </section>
        </>
    )
}