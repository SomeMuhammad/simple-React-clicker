import { useState } from 'react';
import './index.css';
import format from './format';
import Clicker from './clicker';
import Upgrade from './upgrade';

function App() {

  const [count, setCount] = useState(0);
  
  const [upgradeCount,setUpgrade] = useState(1);
  const [bust,setbust] = useState(1);
  const [cost,setcost] = useState(10);

  let button = document.querySelector('.UPbutton');

  function upgrade(){    
    if(count >= cost){
      setCount(count - cost);
      setcost(cost * 8);
      setUpgrade(upgradeCount + 1);
      setbust(bust * 3);
      button.style.backgroundColor = "rgb(178, 178, 178)";
    }
  }
 
  function Control(){
    setTimeout(() => {
      if(count >= cost)button.style.backgroundColor =  "rgb(79, 249, 175)";
    }, 200);
  }

  Control();
  return (
    <div className="App">
        <Clicker forma = {format} count = {count} func={()=>setCount(count+bust)}/>
        <Upgrade func={upgrade} upgrader={upgradeCount} forma={format} cost={cost}/>
    </div>
  );
}

export default App;