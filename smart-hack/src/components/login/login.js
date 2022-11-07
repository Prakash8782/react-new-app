import styles6 from './login.module.css';
import {BsFillPersonFill} from 'react-icons/bs';
import {RiLockPasswordFill} from 'react-icons/ri';
import { useState,useEffect } from 'react';


export default function Login(props) {
    const [logindetails,setLogindetails] = useState({email:'',password:''})
    const [valid,setValid] = useState('false');

    useEffect(()=>{
        if (logindetails.email.includes('@')&&logindetails.password.length>6) {
            setValid('true');
        } 
    },[{email:'prakashpraveensuriya007@gmail.com',password:'1234567'}])

    const loginHandler = (e)=>{
        e.preventDefault();
        localStorage.setItem('login','false')
        props.user('true')
    }

    const logemailHandler = (e)=>{
        setLogindetails({...logindetails,email:e.target.value})
    }
    const logpasswordHandler = (e)=>{
        setLogindetails({...logindetails,password:e.target.value})
    }

    return (
        <div className={styles6.login}>
            <div className={styles6.loginWrapper}>
                <div className={styles6.loginArea}>
                    <h1 className={styles6.loginHead}>Login Here</h1>
                    <form className={styles6.loginForm} onSubmit={loginHandler}>
                        <p>Email/UserName</p>
                        <input type="text" className={styles6.loginbox} placeholder="Username/Email" onChange={logemailHandler}></input><br /><br />
                        {/* <RiLockPasswordFill size="30px"/> */}
                        <p>Password</p>
                        <input type="password" className={styles6.loginbox} placeholder="Password" onChange={logpasswordHandler}></input><br /><br />
                       {valid ? <input type="submit" className={styles6.loginbutton} value="Login"></input> : <input type="submit" className='loginbutton' value="Login" disabled></input>}
                    </form>
                </div>
            </div>
        </div>
    );
}