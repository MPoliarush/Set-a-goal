import { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';



function Form(props) {


const [itemInput, setItemInput] = useState({
    id:'',
    text:''
});

const [isValid, setIsValid] = useState(true);

function inputHandler(event){

    if (event.target.value.length > 0){
        setIsValid(true) 
    } 

    setItemInput({
        id:Math.random().toString(),
        text:event.target.value})
    
}

let buttontext ='Add goal';

function buttonHandler(){
   const item={
    id:itemInput.id,
    text:itemInput.text}

    if (item.text.length === 0) {
        setIsValid(false);
        return;
      } else {console.log(item)
        props.addNewItem(item)
        
        setItemInput({
        id:'',
        text:''
        })}
      
    
    
}


    // props.addNewItem(itemInput)  
    // console.log(itemInput)

return (
      <section className="form-wrapper">
        <div className='form-content'>
            <p>Set a goal <CreateIcon fontSize="large" style={{color:'#F3ECB0'}}/></p>
            <input type='text' onChange={inputHandler} value={itemInput.text} placeholder='enter new goal'></input>
        </div>
        <button className={!isValid?'invalid':''} onClick={buttonHandler}>{buttontext}</button>
      </section>
    )
  }
  
  export default Form;