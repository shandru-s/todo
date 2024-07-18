import { useEffect, useState } from 'react';
import List from './List';


function App() {

  const[words,setWords]=useState()
  const[datas, setDatas]=useState([]) 
  const[search,setSearch]=useState("")


  useEffect(()=>{
    const getData = () =>{
    if(localStorage.getItem("task")!==null){
      const data = JSON.parse(localStorage.getItem("task"))
      setDatas(data)
    }
   
  }
  getData()
  },[])

    


  const storeData = (text) =>{
    if(localStorage.getItem("task")==null){
      localStorage.setItem("task","[]")
    }
    
    let oldData =JSON.parse(localStorage.getItem("task"))
    oldData.push(text)
    
    localStorage.setItem("task",JSON.stringify(oldData))
  }


  const handleAdd = (e)=>{
    e.preventDefault();
    if(words){
      setDatas([...datas,words])
      setWords("")
      storeData(words)
    }
  }
  
  return (
    <div className="text-center" > 
   
      
      <h1 className="text-6xl m-4 font-serif">TODO </h1>

      <div>
      <input type="text" 
      placeholder="search"
      className="input input-bordered input-accent m-2 max-w-xs" 
      onChange={(e)=>setSearch(e.target.value)}/>
      </div>

      <form>
        <input type="text" placeholder="Enter the task"  className="input input-bordered input-accent w-full max-w-xs" value={words} onChange={(e)=>setWords(e.target.value)}></input>
        <button className="btn btn-info m-2" onClick={(e)=>handleAdd(e)}>Add</button>
      </form>
        
        <List datas={datas.filter((data)=>data.toLowerCase().includes(search.toLowerCase()))} setDatas={setDatas}/>

    </div>
  );
}

export default App;
