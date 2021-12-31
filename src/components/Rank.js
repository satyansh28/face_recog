import 'tachyons';
const Rank=(props)=>
{
    return(
        <div>
            <p className="f3 center pa4 white">{props.uname},your rank is {props.urank}</p>
        </div>
    );
}
export {Rank};