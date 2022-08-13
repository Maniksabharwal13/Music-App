import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { DashBoard } from './DashBoard';
import { AnDashBoard } from './AnDashboard';
export const Login = () => {

    const userid = useRef('');
    const password = useRef('');
    const [message, setMessage] = useState('');
    const doLogin = () => {
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        const userObject = { "userid": uid, "password": pwd };
        console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json = JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ', userObject);
        const promise = doAjax(process.env.REACT_APP_LOGIN_URL, 'POST', json);
        promise.then(response => {
            response.json().then(data => {
                console.log('Data Rec From Server ', data);
                setMessage(data.message);
            }).catch(err => {
                console.log("Invalid JSON ", err);
            })
        }).catch(err => {
            console.log('Error During Server Call ', err);
        })
    }

    if (message.startsWith("Welcome Admin")) {
        return (<AnDashBoard msg={message} />)
    }
    else if (message.startsWith("Welcome")) {
        return (<DashBoard msg={message} />)
    }
    else {
        return (
            <>
                <div className="logindiv">
                    <h2>Login</h2>
                    <br/>
                    <div className='form-group userinput'>
                        <i class="fas fa-user fa-2x"></i>
                        <input ref={userid} className='form-control' type='text' placeholder='Type Userid Here' />
                    </div>
                    <br/>
                    <div className='form-group pwdinput'>
                        <i class="fas fa-unlock fa-2x"></i>
                        <input ref={password} className='form-control' type='password' placeholder='Type Password Here' />
                    </div>
                    <br/>
                    <div className='form-group loginbtns'>
                        <button onClick={doLogin} className='btn btn-primary loginbtn'>Login</button>
                    </div>
                </div>
            </>
        )
    }
}