import "/src/styles/organisms/Footer.css"

function Footer() {
    return (
        <footer>
            <section>
                <h2>Contacto</h2>
                <div className="datos_footer">
                    <p>Telefono:</p>
                    <p>+56 9 4312 8632</p>
                </div>

                <div className="datos_footer">
                    <p>Email:</p>
                    <p>contacto@cnvaldivia.com</p>
                </div>
            </section>
            <section>
                <h2>Ubicacion</h2>
                <div className="datos_footer">
                    <p>San Sebastian 153, Valdivia.</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;