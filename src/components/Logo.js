
import 'tachyons';
import brain from './log.png'
const Logo= function()
{
    return(
        <div className="dim" style={{display:'grid', padding:"15px", backgroundImage:"url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png')",borderRadius:"10px",backgroundPosition:'center',float:'left',justifyContent:'flex-start'}}>
          <img alt='' src={brain} />
        </div>
    );
}
export {Logo};