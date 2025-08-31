//import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Home from './Home.tsx'
import ComingSoon from "./ComingSoon.tsx";
import SocMedButton from "./components/SocMedButton.tsx";


function App() {
  //const [count, setCount] = useState(0)

  return (
      <Router>
          <div id="bodyDiv">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/soon" element={<ComingSoon/>}/>
              </Routes>
              <div className="socmedRow">
                  <SocMedButton link="https://holoprofansph.org" icon="fas fa-globe" />
                  <SocMedButton link="https://facebook.com/HoloProFansPH" icon="fab fa-facebook-f" />
                  <SocMedButton link="https://twitter.com/HoloProFansPH" icon="fab fa-twitter" />
                  <SocMedButton link="mailto:holoprofansph@gmail.com" icon="fas fa-envelope" />
              </div>
              <div className="socmedRow">
                  <SocMedButton link="https://ph-starlights.carrd.co/" icon="fas fa-globe" />
                  <SocMedButton link="https://www.facebook.com/PHStarlights/" icon="fab fa-facebook-f" />
                  <SocMedButton link="https://twitter.com/ph_starlights" icon="fab fa-twitter" />
                  <SocMedButton link="mailto:phstarlights001@gmail.com" icon="fas fa-envelope" />
              </div>
              <p id="credits">
                  Project organized by HoloPro Fans PH and PH Starlights.<br/>
                  This is a non-profit fan-made project.<br/>
                  Not affiliated with COVER Corp.
              </p>
          </div>
          {/*<img id="bgGlobe" src="/img/moomin moa web.webp" alt="MOA Globe"/>*/}
          <img id="bg" src="/img/2025-flasta-bg.jpg" alt="background"/>
      </Router>
  )
}

export default App
