
import './Showbox.css'
import React from 'react';
import 'tachyons';

class FaceRec extends React.Component
{
    constructor(props)
    {
        super();
        this.props=props;
    }
    render()
    {
        if(this.props.status===2)
        {
            return(
                <div className="center dark-red">
                    <h3>Invalid URL!</h3>
                </div>);
        }
        else 
            return(
                <div className="center ma mid">
                <div className="absolute mt2">
                    <img className="mid" id="inpimag" src={this.props.imglink} alt='' />
                    <div className='bounding-box mid' style={{top: this.props.box.topRow, right: this.props.box.rightCol, bottom: this.props.box.bottomRow, left: this.props.box.leftCol}}></div>
                </div>
                </div>
            );  
    }
    
}
export default FaceRec;