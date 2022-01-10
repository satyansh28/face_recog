import React from 'react';
import 'tachyons';
const Signin=(props)=>
{
    const formvalue={email:'',password:''};
    const onemailchange=(event)=>
    {
        formvalue.email=event.target.value;
    }
    const onpswdchange=(event)=>{
        formvalue.password=event.target.value;
    } 
    const onsigninclick=()=>
    {
        if(formvalue.email.length===0 || formvalue.password.length===0)
            window.alert("Name and password cannot be empty!");
        else
        {
        fetch('https://rocky-oasis-10907.herokuapp.com/signin',{
            
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formvalue)
        }).then(response =>{
            if(response.status===401)
                window.alert('Invalid email or password!');
            else if(response.status===200)
            {
                response.json()
                .then(user=> 
                    {
                        
                        props.onLogin('home',user.id,user.name,user.entries)
                    });
            }
            else
                throw Error('err');
        })
        .catch(err => {window.alert('Something failed,try again later')})
        }
        
    }
    return(
    <article className="br4 shadow-4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    
    <main className="pa4 black-80 center">
    <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 center mh0">Sign In</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input onChange={(event)=> onemailchange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input onChange={(event)=> onpswdchange(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
        </div>
        </fieldset>
        <div className="">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>onsigninclick()}/>
        </div>
        <div className="lh-copy mt3">
        <p onClick={()=>
            props.onLogin('register')} className="f6 pointer link dim black db">Register</p>
        </div>
    </div>
    </main> 
    </article >
    );
}
export default Signin;