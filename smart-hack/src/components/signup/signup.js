import './signup.css';
import {BsFillPersonBadgeFill,BsFillPersonFill} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'

export default function SignUp() {
    return (
        <div>
            <div className='signupContainer'>
                <div className='signupWrapper'>
                    <div className='signup'>
                        <h1 className='register'><BsFillPersonBadgeFill/>Sign Up</h1>
                        <div className='regForm'>
                            <form className='signForm'>
                                <BsFillPersonFill size="25px"/><input type="text" className='signbox' id='username' placeholder='UserName'></input><br /><br />
                                <AiTwotoneMail size="25px"/><input type="email" className='signbox' id='email' placeholder='Email'></input><br /><br />
                                <RiLockPasswordFill size="25px"/><input type="password" className='signbox' id='password' placeholder='Password'></input><br /><br />
                                <input type="submit" className='submit' id='submit' value="Sign Up" ></input><br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}