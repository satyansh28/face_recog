import 'tachyons';
const Register=(props)=>
{
    const formvalue={name:'',email:'',password:''};
    const onnamechange=(event)=>
    {
        formvalue.name=event.target.value;
    }
    const onemailchange=(event)=>
    {
        formvalue.email=event.target.value;
    }
    const onpswdchange=(event)=>{
        formvalue.password=event.target.value;
    }
    const registerclick=()=>{
        if (formvalue.password.length<=3)
            window.alert("Password must be 4 characters long atleast!");
        else
        {
        fetch('http://localhost:5000/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formvalue)
        }).then(res => {
            if (res.status===200)
                props.click('signin');
            else if(res.status===400)
                window.alert('Email already in use!');
            else
                window.alert('An error occurred, please try again');

        });
        }
        //props.click('signin');
    }
    return(
        <article className="br4 shadow-4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        
        <main className="pa4 black-80 center">
        <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 center mh0">Register</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input onChange={(event)=>onnamechange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"  />
            </div>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input onChange={(event)=>onemailchange(event)} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input onChange={(event)=>onpswdchange(event)} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={()=>registerclick()}/>
            </div>
            <div className="lh-copy mt3">
            <p onClick={()=>props.click('signin')} className="f6 pointer link dim black db">Sign In</p>
            </div>
        </div>
        </main> 
        </article >
        );
}
export default Register;