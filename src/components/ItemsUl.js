import ClearIcon from '@mui/icons-material/Clear';




function ItemsUl(props) {


  function liHandler(event){
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  }


  function hadlerRemove(id){
    const newList = props.list.filter((item) => item.id !== id);
    props.remover(newList)
  }

  if(props.list.length===0) { return <p className="warning">No goals were setted!</p>}



    return <section className="ul-wrapper">

      {<ul>
          {props.list.map(item=>
            (<li key={item.id} onClick={liHandler}>
              {item.text} 
              <button onClick = {()=>hadlerRemove(item.id)}><ClearIcon fontSize="medium"/></button>
            </li>)
          )}
      </ul> 
      }
  
    </section>
  }
  
  export default ItemsUl;