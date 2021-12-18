import React from 'react';
import 'tachyons';
import './Showbox.css';
const Showbox=(props)=>
{
    console.log(props.box);
    if(props.status===1 && props.box.tops!==0)
    {console.log("works")
    return(
            <div className="fbox" style={
            {
                top:props.box.tops,
                bottom:props.box.bottoms,
                left:props.box.lefts,
                right:props.box.rights,
            }}></div>
        );}
    else
    return(<div></div>)
}
export default Showbox;
            