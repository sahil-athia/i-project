import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

import AppNav from "./components/AppNav"
import HomeInfo from "./components/HomeInfo"
import AccessBox from './components/AccessBox';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://api.memberstack.io/static/memberstack.js?custom";
    script.setAttribute('data-memberstack-id', '437974800f22566d2a57ac00bdc867ef');
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div className="App">
      <AppNav />
      <AccessBox />
      <HomeInfo />
    </div>
  );
}

export default App;
