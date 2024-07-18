import { useState } from 'react';
import List from './List';


function App() {

  const[words,setWords]=useState()
  const[datas, setDatas]=useState([])

  const handleAdd = ()=>{
    if(words){
      setDatas([...datas,words])
      setWords("")
    }
  }
  
  return (
    <div className="text-center" >
      
      <h1 className="text-6xl m-4 font-serif">ToDo List</h1>
      <div>
        <input type="text" placeholder="Enter the task"  className="input input-bordered input-accent w-full max-w-xs" value={words} onChange={(e)=>setWords(e.target.value)}></input>
        <button className="btn btn-info m-2" onClick={handleAdd}>Add</button>
      </div>
        
        <List datas={datas} setDatas={setDatas}/>

    </div>
  );
}

export default App;
