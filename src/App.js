import { useState } from 'react';
import Form from './components/Form'
import ItemsUl from './components/ItemsUl';
import { useEffect } from "react";

function App(props) {

const [goalList,setGoalList]=useState(
 [
    { id:1,
      text:'Read book'
    },
    { id:2,
      text:'Learn french'
    }
  ]) ;

  function addNewGoal(item){
    console.log(item)
    setGoalList([...goalList,item])
  }

  function deleter(updatedList){
    setGoalList(updatedList);
  }


  useEffect(() => {
    localStorage.setItem('goalListLocal',JSON.stringify(goalList));
  }, [goalList]);
  
  
  // useEffect(() => {
  //   const data=localStorage.getItem("goalListLocal");
  //   setGoalList(JSON.parse(data));
  // }, [])
  

  return (<div className='main-page'>
    <Form addNewItem={addNewGoal}/>
    <ItemsUl list={goalList} remover={deleter}/>
  </div>)
}

export default App;
