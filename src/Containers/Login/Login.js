import React, {useEffect, useState} from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button'

const Login = () =>{
    const [loginDetail, setLoginDetail] = useState({name:'',password:''});

    const updateLoginDetail = (event) =>{

        let name = event.name;
        let value = event.value;
        setLoginDetail({...loginDetail, [name]:value});
    }

    const loginDetails = () =>{
        console.log("loginDetail>>>>>>>>>>>>>>>",loginDetail)
    }

   
    return(
        <div className="loginContainer">
            UserName:<Input name={"name"} value={''} type={'text'} updateField={updateLoginDetail}/>
            <br/>
            Password:<Input name={"password"} value={''} type={'password'} updateField={updateLoginDetail}/>
            <br/>
            <Button handleButton={loginDetails} buttonName={"Login"}/>
        </div>
    )
}

export default Login