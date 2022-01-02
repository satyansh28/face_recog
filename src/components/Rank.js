import 'tachyons';
const Rank=(props)=>
{
    return(
        <div>
            <p className="f3 center pa4 white">{props.uname},your number of entries is {props.uentries}</p>
        </div>
    );
}
export {Rank};