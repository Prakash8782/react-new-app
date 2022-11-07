import { useState} from "react";
import Header from "../header/header";
import Login from "./login";

export default function LoginArea() {

    const [user,setUser] = useState('false')

    const login = (detail)=>{
        setUser(detail);
    }

    return (
        <div>
            <div className="loginarea">
                {/* {(user.email= false)?(<Header></Header>):(<Login login={login}></Login>)} */}
                
                {user=='true' ? <Header></Header> : <Login user={login}></Login>}
            </div>
        </div>
    );
}