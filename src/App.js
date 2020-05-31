import React, { useState, useEffect } from 'react';
import './App.css';
import AddToInput from './components/inputA';
import { makeStyles } from '@material-ui/core/styles';
//import Result from './components/result';
import {NameInputContext, SurNameInputContext} from './components/context'


const Styles = makeStyles((theme) => ({
    
}));

function App() {
  
  const [nameInputContext, setNameInputContext] = useState({});
  const [surNameInputContext, setSurNameInputContext] = useState({});

  const onNameInputChange = (value) => {
    setNameInputContext({value, onValueChange: onNameInputChange})
  }

  const onSurNameInputChange = (value) => {
    setSurNameInputContext({value, onValueChange: onSurNameInputChange})
  }
  useEffect( ()=>{
    setNameInputContext({value: '', onValueChange: onNameInputChange})
    setSurNameInputContext({value: '', onValueChange: onSurNameInputChange})
  }, [] )
  //const context = React.createContext(defVal)
  const classes = Styles();
  return (
    <>
    <NameInputContext.Provider value={nameInputContext}>                
    <SurNameInputContext.Provider value={surNameInputContext}>                
       <AddToInput />             
    </SurNameInputContext.Provider>             
    </NameInputContext.Provider>
    
    </>
  );
}

export default App;    
