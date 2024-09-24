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
                <div id="expansiveWeb"></div>
                <img src="images/memphis/corporate-memphis.jpg" alt="corporate-memphis" className="corporate-memphis"/>
                
                <h2>Chi siamo e <br/> di cosa ci occupiamo?</h2> <br/>
                <p>expansiveWeb è un gruppo che sviluppa software per trasformare idee in realtà.
                    La <span>soddisfazione del cliente</span> è la nostra priorità, questo è possibile grazie a un team di 
                    giovani appassionati dell'<span>informatica</span>. <br/> <br />
                    I nostri prodotti sono <span> responsivi, scalabili </span> ma soprattuto professionali;
                    maggiori informazioni sui servizi sono disponibili in basso.
                </p>
            </div>
        </div>
    );
}

export default Presentation;