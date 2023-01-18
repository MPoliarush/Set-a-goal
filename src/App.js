import { useState } from 'react';
import Form from './components/Form'
import ItemsUl from './components/ItemsUl';
import { useEffect } from "react";

function App(props) {
  // let list=[
  //   { id:1,
  //     text:'Read book'
  //   },
  //   { id:2,
  //     text:'Learn french'
  //   }
  // ]
 
const [goalList,setGoalList]=useState([])
   
  

  useEffect(() => {
    const savedData= JSON.parse(localStorage.getItem('localData'));
    
    if(savedData==null){
      setGoalList([])
    } else if (savedData.length>0){
      setGoalList(savedData)
    }
  }, []);
  


  function addNewGoal(item){
    console.log(item)
    setGoalList([...goalList,item])
    localStorage.setItem('localData', JSON.stringify([...goalList,item]))
  }

  function deleter(updatedList){
    setGoalList(updatedList);
    localStorage.setItem('localData', JSON.stringify(updatedList))
  }



  return (<div className='main-page'>
    <Form addNewItem={addNewGoal}/>
    <ItemsUl list={goalList} remover={deleter}/>
  </div>)
}


export default App;
