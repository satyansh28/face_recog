
import 'tachyons';
const Imageinput=function(props)
{
    return(
        <div className="center-screen">
        <div className="pa4 br5 shadow-3 w-50 center greys">
          <input className="w-80 links" onInput={props.inputs} type='text'  placeholder="Enter URL to image"/>
          <br/><br/>
          <button onClick={props.clicked} className="center grow f5 link ph3 pv2 dib white bg-dark-blue">Detect Faces</button>
        </div>
        </div>
    );
}
export {Imageinput};