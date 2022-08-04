 import React, { Component } from 'react';


function fancyBorder(props){
    return(
        <div style={{border : '1px solid black', }}>
            {props.children}
        </div>
    );
}

class Composition extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div>
        
        </div> );
    }
}
 
export default Composition;