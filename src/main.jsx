import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './views/App'
import Header from './components/Header';
import Preventivo from './views/Preventivo';
import './css/index.css'

function Views(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/preventivo" element={<Preventivo/>} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Views />
    </StrictMode>,
)
