import React, { useState } from "react";
import "./Login.css";
import logo from "./images/LinkedinLogo.png";
import { useToasts } from "react-toast-notifications";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {login} from "./features/user/userSlice";

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const {addToast} = useToasts();
 
  const dispatch = useDispatch();

  const register = () => {
      if(!name) return addToast("Please Enter Full Name!!", { appearance: 'error' });

      auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName:name,
              photoURL:photoUrl,
          }).then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl:photoUrl
            }))
          })
      }).catch(error=> console.log(error))
  };

  const loginfn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.enail,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoUrl
      }))
    }).catch(error=>console.log(error))
  };
  return (
    <div className="login">
      <img src={logo} alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input
          value={photoUrl}
          onChange={e => setPhotoUrl(e.target.value)}
          placeholder="Profile Pic URL (Optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginfn}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?&nbsp;
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
