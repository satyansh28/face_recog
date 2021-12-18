

import React from 'react';
import 'tachyons';
import Showbox from './Showbox';
class FaceRec extends React.Component
{
    constructor(props)
    {
        super();
        this.props=props;
        this.imag=React.createRef();
        this.state={box:{tops:0,bottoms:0,lefts:0,rights:0}};
        this.one=0;
    }
    componentDidUpdate()
    {
        console.log("Yo");
        if(this.props.status===1 && this.state.box.tops===0)
        {
            console.log(this.imag.current.clientHeight);
            this.setState({box:
            {
                tops:this.props.box.top_row*this.imag.current.clientHeight,
                bottoms:this.imag.current.clientHeight*(1-this.props.box.bottom_row),
                lefts:this.imag.current.clientWidth *this.props.box.left_col,
                rights:this.imag.current.clientWidth*(1-this.props.box.right_col),
            }});
        }
    }
    render()
    {
        if(this.props.status===0)
        {
            return(<div></div>);
        }
        else if(this.props.status===1)
            return(
                <div className="center w-70">
                    <img ref ={this.imag} src={this.props.imglink} alt='' onLoad={console.log("first done!")}/>
                    <Showbox  box={this.state.box} one={this.one} status={this.props.status}/>
                </div>
            );  
        else
            return(
                <div className="center dark-red">
                    <h3>Invalid URL!</h3>
                </div>
            );
    }
    
}
export default FaceRec;