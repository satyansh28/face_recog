import React from 'react';
import 'tachyons';
const Navigation=function(props)
{
    return(
        <nav style={{display: 'flex',justifyContent: 'flex-end' }}>
            <p onClick={()=>props.signout('signin')} className='f4 link dim black underline ph3 pointer'>Sign Out</p>
        </nav>
    );
}
export {Navigation};