import "../css/Presentation.css"

function Presentation(){
    return(
        <div className="Presentation">
            <div className="contact-wrapper">
                <p id="contact-p" >CONTATTACI!</p>

                <div>
                    <a href="mailto:expansive.web.agency@gmail.com">
                        <img src="/images/icons/email.svg" alt="email" />
                        <p>expansive.web.agency@gmail.com</p>
                    </a>
                </div>
            </div>

            <div className="description">
                <img src="images/memphis/corporate-memphis.jpg" alt="corporate-memphis" className="corporate-memphis"/>
                
                <h2>Chi siamo e <br/> di cosa ci occupiamo?</h2> <br/>
                <p>expansiveWeb una agenzia che sviluppa siti web a cui importa una sola cosa,
                    la <span>soddisfazione del cliente</span>, per noi questo è possibile grazie a un <span>team di
                    esperti nel settore</span>. <br/>
                    I nostri prodotti sono <span> responsivi, scalabili </span> ma soprattuto professionali, provare
                    per credere, maggiori informazioni sui piani disponibili in basso
                </p>
            </div>
        </div>
    );
}

export default Presentation;