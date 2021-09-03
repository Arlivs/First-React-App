import SimpleComp from "./SimpleComp"
function Home() {
    return(
    <>
        <div className="banner">
            <div className="container">
                <div className="banner-header">
                    Its a Main Page of this application
                </div>
                <SimpleComp></SimpleComp>
                <div className="banner-content">
                    SOme content
                </div>
            </div>
        </div>
    </>
    )
}
export default Home