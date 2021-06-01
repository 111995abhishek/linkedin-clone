import React,{ useState} from 'react';
import './Login.css';
import { auth } from './firebase';
import { login } from './features/userSlice';
import {useDispatch} from 'react-redux';

function Login() {
    const [email,setemail] = useState("");
    const [password,setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilepic,setProfilepic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();
    }
    const register =()=>{
        if(!name) {
            return alert("please enter the full name");
        };
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoUrl:profilepic,
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilepic,
                })
            
                );
            })
        }).catch((error)=>alert(error));
    }
    return (
        <div className="login">
            <img src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png" alt=""/>

            <form>
                <input  value={name} onChange={(e) => setName((e.target.value))} type="text" placeholder="Full name (required)"/>
                <input value={profilepic} onChange={(e)=>setProfilepic(e.target.value)} placeholder="profile pic URL" type="text"/>
                <input value={email} onChange={e => setemail(e.target.value)} type="Email" placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="passoword" type="password"/>
                <button type="submit" onClick={loginToApp}>SignIn</button>
            </form>
            <p>Not a Member?
                <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
