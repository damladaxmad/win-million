import './App.css';
import Header from './Componants/Header';
import Awards from './Componants/Awards';
import MainBody from './Componants/MainBody';
import Results from './Componants/Results';
import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
function App() {
  const stopped = useSelector((state) => state.stopped)
  const dispatch = useDispatch()
  const resetHandler = () =>{
    dispatch({type: "restart"})
    dispatch({type: "next"})
    
  }
  


  return (
    <div className="App">
     <Header/>
    {stopped && <Results onReset = {resetHandler}/>}
     {!stopped && <MainBody/>}
    </div>
  );
}

export default App;
