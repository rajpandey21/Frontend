import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero';
import AboutUS from './components/AboutUS/AboutUS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Services from './components/Services/Services';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Sidebar_pages/Dashboard/Dashboard';
import Abouts from './components/Sidebar_pages/Abouts/Abouts';
import Comments from './components/Sidebar_pages/Comments/Comments';
import Products from './components/Sidebar_pages/Products/Products';
import Analytics from './components/Sidebar_pages/Analytics/Analytics';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Header/>
       <Hero/> 
       <AboutUS/>
       <Services/> 
       <Sidebar/>*/}
       


       <BrowserRouter>
       <Sidebar>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<Abouts/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/comment" element={<Comments/>}/>
          <Route path="/products" element={<Products/>}/>
        
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
