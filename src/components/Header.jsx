import "../css/Header.css";

function Header(){
    return(
        <header>
            <ul>
                <li>expansiveWeb</li>
                <li><a href="#home-id"><p>Home</p></a></li>
                <li><a href="#servizi-id"><p>Servizi</p></a></li>
                <li><a href="#Footer"><p>Contattaci</p></a></li>
            </ul>
        </header>
    );
}

export default Header;