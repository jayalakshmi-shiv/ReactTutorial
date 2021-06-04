import React, {useState} from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import './style.css'

const Login = () =>{
    const [loginDetail, setLoginDetail] = useState({name:'',password:''});

    const updateLoginDetail = (event) =>{

        let name = event.name;
        let value = event.value;
        setLoginDetail({...loginDetail, [name]:value});
    }

    const loginDetails = () =>{
        console.log("loginDetail>>>>>>>>>>>>>>>",loginDetail);
    }

   
    return(
        <div className="loginContainer">
            <div className="loginWrapper">
            <h4> User Name</h4><Input name={"name"} value={''} type={'text'} updateField={updateLoginDetail}/>
            <br/>
            <h4>Password</h4><Input name={"password"} value={''} type={'password'} updateField={updateLoginDetail}/>
            <br/>
            <Button handleButton={loginDetails} buttonName={"Login"}/>
            </div>
        </div>
    )
}

export default Login