import React from "react";
import "../css/Contattaci.css"

function Contact(){
    return(
        <main id="contactForm" >
            <div id="contactID"></div>
            <h4>Inviaci un Messaggio!</h4>
            <form action="https://formspree.io/f/xovqvova" method="POST">
                <label htmlFor="username" >
                    username <br/>
                    <input type="text" name="username" id="username" />
                </label>

                <br/>

                <label htmlFor="email">
                    email <br/>
                    <input type="email" name="email" id="email" />
                </label>

                <br/>

                <label htmlFor="messaggio">
                    messaggio <br/>
                    <textarea type="text" name="messaggio" id="messaggio"/>
                </label>

                <br/>

                <input type="submit" id="submit" name="submit" value="Invia Messaggio" />
            </form>
        </main>
    );
}

export default Contact;