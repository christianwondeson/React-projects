import { useState } from 'react';
import React from 'react';
import Todo from './Todo';
import '../index.css';
import Backdrop from './Backdrop';
import App from '../App';

function Model()
{

     return(
        <div className="model" >
            <p>Are you sure?</p>
            <button className='btn btn--alt'>Confirm</button>
            <button className= 'btn'>Cancel</button>
        </div>
     );
}
export default Model;