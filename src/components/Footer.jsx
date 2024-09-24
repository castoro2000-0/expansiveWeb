import "../css/Footer.css"

function Footer(){
    return(
        <footer id="Footer">
            <div className="web-agency">
                <p>Web Agency expansiveWeb</p>
                <ul>
                    <li><img src="/images/icons/pin.svg" alt="pin" />Napoli, Campania, Italia</li>
                    <li><img src="/images/icons/email.svg" alt="email" />E-mail: expansive.web.agency@gmail.com</li>
                </ul>
            </div>
            
            <div className="servizi-footer">
                <p>Offriamo i seguenti servizi:</p>
                <ul>
                    <li>Web design</li>
                    <li>Web development</li>
                    <li>Hosting</li>
                    <li>Seo Growing</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;