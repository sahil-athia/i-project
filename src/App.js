import './App.css';
import { useEffect } from 'react'

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
      <a href="#/ms/signup/60381a660dd8ef0004dd0f58">Sign-Up</a>
    </div>
  );
}

export default App;
