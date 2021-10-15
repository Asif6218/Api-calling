import {useState,useEffect} from "react"
import './App.css';

const url="https://www.breakingbadapi.com/api/characters"

function App() {
  const [name , setname]=useState([]);
  useEffect (()=>{
    fetch(url)
    .then((response) => response.json())
    .then((response)=>setname(response))
    .catch();
  },[]);
  return (
    <div className="App">
      <h1>Breaking Bad</h1>
    <card className="pro">
      {name.map((item)=>(
      <div key={item.id} className="card">   <img src={item.img}/> <br/>
   Name :{item.name} <br/>
   Birthday : {item.birthday}<br/>
   Occupation :{item.occupation}<br/>
   Status :{item.status}<br/>
   Nickname :{item.nickname}<br/>
   Potrayed :{item.portrayed}</div>))}
    </card>
      
    </div>
  );
}

export default App;
