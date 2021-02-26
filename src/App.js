import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

import AppNav from "./components/AppNav"
import HomeInfo from "./components/HomeInfo"
import AccessBox from './components/AccessBox';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = process.env.REACT_APP_BACKEND_API;
    script.setAttribute('data-memberstack-id', process.env.REACT_APP_DATA_ID);
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
