import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='container'>
        
        <Picture
        name = "Ehsan0078.jpg"
        />
        <Name />

        <Bio />
        <SkillList />
    </div>
  );
}

function Picture(props) {
  return(
    
    <img src={props.name} alt='alt'/>
    
  );

}

function Name (){
  return(
    <h1>Ehsan Ashourzadeh</h1>
  );
}

function Bio() {
  return(
    <p style={{fontSize:"15px"}}>Hi
      My name is Ehsan Ashourzadeh. I am a graduate of software engineering from Bozormehr Qayinat University and I have been working in front-end site programming for some time.</p>
  );
}


function SkillList() {
  return(
    <div>
      <button className="button-36">React.js</button>
      <button className="button-37">Javscript</button>
      <button className="button-38">Vue.js</button>
      <button className="button-39">Bootstrap</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

