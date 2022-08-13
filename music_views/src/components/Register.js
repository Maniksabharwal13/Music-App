import React, { useRef, useState } from 'react';
import { doAjax } from '../utils/ajax';
import { Home } from '../containers/Home';
export const Register = () => {

    const userid = useRef('');
    const password = useRef('');
    const name = useRef('');
    const [message, setMessage] = useState('');
    const goHome = () => {
        setMessage('home');
    }
    const doRegister = () => {
        console.log(userid, password);
        let uid = userid.current.value;
        let pwd = password.current.value;
        let uname = name.current.value;
        const userObject = { "userid": uid, "password": pwd, "name": uname };
        // console.log('URL is ', process.env.REACT_APP_LOGIN_URL);
        const json = JSON.stringify(userObject);
        console.log('JSON is ', json, ' Object is ', userObject);
        const promise = doAjax(process.env.REACT_APP_REGISTER_URL, 'POST', json);
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
    if (message === 'home') {
        return (
            <Home />
        )
    }
    else {
        return (
            <>
            <h3>{message}</h3>
                <div className="regdiv">
                    <h2> Register</h2>
                    <div className='form-group reguserinput'>
                        <i class="fas fa-user fa-2x"></i>
                        <input ref={userid} className='form-control' type='text' placeholder='Type Userid Here' />
                    </div>
                    <div className='form-group regpwdinput'>
                        <i class="fas fa-unlock fa-2x"></i>
                        <input ref={password} className='form-control' type='password' placeholder='Type Password Here' />
                    </div>
                    <div className='form-group regnameinput'>
                        <i class="fas fa-edit fa-2x"></i>
                        <input ref={name} className='form-control' type='text' placeholder='Type Name Here' />
                    </div>
                    <div className='form-group regbtns'>
                        <button onClick={doRegister} className='btn btn-primary'>Register</button>
                        &nbsp;&nbsp;
                        <button onClick={goHome} className='btn btn-danger'>Go To Home</button>
                    </div>
                </div>
            </>
        )
    }
}