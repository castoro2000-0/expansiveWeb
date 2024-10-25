import React, { useState } from "react";
import "../css/Preventivo.css";
import { Link } from "react-router-dom";

function Preventivo(){

    const [prezzo, setPrezzo] = useState(0);
    const [prezzoMensile, setPrezzoMensile] = useState(0);

    return(
        <main id="main-preventivo">
            <div className="builder-preventivo">
                <h2>Costruisci il tuo Preventivo!</h2>
        
                <div className="site-type">
                    <Element service="Sito Statico - 300€" costo={300} prezzo={prezzo} setPrezzo={setPrezzo} label="static" />
                    <Element service="Sito Dinamico - 500€" costo={500} prezzo={prezzo} setPrezzo={setPrezzo} label="dynamic" />
                </div>
        
                <div className="col">
                    <Element service="Contact Form - 50€" costo={50} prezzo={prezzo} setPrezzo={setPrezzo} label="contact" />
                    <Element service="Hosting + Dominio + Seo Growing - 150€" costo={150} prezzo={prezzo} setPrezzo={setPrezzo} label="Hosting" />
                    <Element service="Design Personalizzato - 50€" costo={50} prezzo={prezzo} setPrezzo={setPrezzo} label="Design" />
        
                    <Element 
                        service="Aggiornamento e Assistenza - 150€/mese" 
                        costo={150} 
                        prezzo={prezzo}
                        prezzoMensile={prezzoMensile}
                        setPrezzo={setPrezzo}
                        setPrezzoMensile={setPrezzoMensile}
                        èMensile={true}
                        label="Update"
                    />
                </div>
        
                <p id="prezzo-finale" >Prezzo Finale <br/> {prezzo}€ {(prezzoMensile != 0) ? `+ ${prezzoMensile}/mese` : ""} </p>
            </div>

            <Link to="/" id="link-home" >Torna alla Home</Link>
        </main>
    );
}

function Element({service, costo, prezzo, setPrezzo, èMensile = false, setPrezzoMensile = null, prezzoMensile = null, label}){

    const [cont, setCont] = useState(0);

    function changePrice(){
        if(èMensile == true){
            if(cont % 2 == 0 ){
                setPrezzoMensile(prezzoMensile + costo)
            }
            else {
                setPrezzoMensile(prezzoMensile - costo);
            }
        }
        else {
            if(cont % 2 == 0 ){
                setPrezzo(prezzo + costo);
            }
            else {
                setPrezzo(prezzo - costo);
            }
        }
        setCont(cont + 1);
    }

    return(
        <div className="element">
            <label htmlFor={label}>
                <input type="checkbox" onClick={changePrice} id={label} />
                {service}
            </label>
        </div>
    );
}

export default Preventivo;