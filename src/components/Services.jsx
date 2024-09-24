import "../css/Services.css";
import services_json from "../data/services.json";

function Services(){

    const services = services_json;

    return(
        <div className="Services" id="servizi-id">
            <div className="service">
                <div className="service-title">
                    <hr/><h2>SERVIZI</h2><hr/>
                </div>

                <div className="service-wrapper">
                    {services.map((element, index) => (
                        <Service
                        key={index}
                        nome_servizio={element.nome_servizio}
                        prezzo={element.prezzo}
                        descrizione={element.descrizione}
                        servizio1={element.servizio1}
                        servizio2={element.servizio2}
                        servizio3={element.servizio3}
                        servizio4={element.servizio4}
                        ></Service>
                    ))}
                </div>
            </div>

            <img src="images/memphis/corporate-memphis2.jpg" alt="corporate-memphis2" className="corporate-memphis2" />

            <div className="added-tax" id="#added-tax-id">  
                <p>Tasse aggiuntive:</p>
                <ul>
                    <li>Design personalizzato da noi: +50€</li>
                    <li>Sito multipagina: +25€/pagina - sito statico <br/> +75€/pagina - sito dinamico</li>
                    <li>Aggiornamento e Assistenza: <br/>200€/mese</li>
                    <li>Hosting + Dominio + Seo Growing: +150€</li>
                    <li>Contact form per clienti: +50€</li>
                </ul>
            </div>
        </div>
    );
}

function Service(props){
    return(
        <div className="service-grid">
            <div className="price-service">
                <h3>{props.nome_servizio}</h3>
                <p>{props.prezzo}</p>
            </div>

            <p>{props.descrizione}</p> <br/>
            
            <p>servizi inclusi:</p>
            <ul>
                <li>{props.servizio1}</li>
                <li>{props.servizio2}</li>
                <li>{props.servizio3}</li>
                <li>{props.servizio4}</li>
            </ul>
            <div className="preventivo">
                <a href="mailto: ">
                    Richiedi un preventivo
                </a>
            </div>
        </div>
    );
}

export default Services;