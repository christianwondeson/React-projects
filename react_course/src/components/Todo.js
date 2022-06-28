import { useState } from 'react';
import Model from './Model';
import Backdrop from './Backdrop';
function Todo(props) 
{
    const [modelIsOpen, setModelIsOpen] = useState(false);

    return(
        <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Model />}
      {modelIsOpen && <Backdrop />}
    </div>
    );

    function deleteHandler(){
        setModelIsOpen(true);
    }
}

export default Todo;