function Info(props) {
    const listItem = Array.from(props.data).map(el => <li><a href={el.href}>{el.title}</a></li>)
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
                </ul>
            </div>
        </div>
    </section>
    </>
    )
}
export default Info;