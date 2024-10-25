import Header from "../components/Header"
import Script from "../components/Script"
import Home from "../components/Home"
import Presentation from "../components/Presentation"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "../css/responsive.css"

function App() {

  	return (
        <>
			<Header></Header>
			<Script></Script>
			<Home></Home>
			<Presentation></Presentation>
			<Services></Services>
			<Contact></Contact>
			<Footer></Footer>
		</>
  	)
}

export default App
