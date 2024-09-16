// src/App.js or src/App.tsx
// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Footer';
import LoginNav from './LoginNav';
import RegistrationForm from './registrationForm';
import IamNew from './pages/IamNew';
import SecondFooter from './secondFooter';
import MainPage from './pages/mainpage';
import Connect from './pages/Connect';

function App() {
  return (

    <Router>
     <div className="min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat">
          <LoginNav/>
            <main className="min-h-screen w-full flex-grow mx-auto">
              <Routes>
                  <Route path='/' element = {<MainPage/>}/>
                  <Route path = "/iamnew" element ={<IamNew/>}/>
                  <Route path='/connect' element={<Connect/>}/>
                  <Route path="/registrationForm" element={<RegistrationForm/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          <SecondFooter/>
         <Footer/>
    </div>
    </Router>
    );
}


export default App;
