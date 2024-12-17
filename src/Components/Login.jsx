import React, { useEffect, useState } from 'react'
import {auth} from "../Firebase"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = () => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [user, setUser]=useState(null)

        const loginAccount=(e)=>{
            e.preventDefault();  
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials)=>{
                console.log('User Login successfully!', userCredentials);
                const loggedInUser=userCredentials.user;
                setUser(loggedInUser);
            })
            .catch((error)=>{
                console.error('Error!', error);
                alert(error.message);  
            })
        }


        useEffect(()=>{
            const unsubscribe=auth.onAuthStateChanged((user)=>{
                if(user)
                {
                    setUser(user)
                }
                else
                {
                    setUser(null)
                    
                }
            })

            return ()=> unsubscribe();
        },[])

        const logout=()=>{
            signOut(auth)
            .then(()=>{
                console.log('User logged out successfully!');
                setUser(null);
            })
            .catch((error)=>{
                console.error('Error!', error);
                alert(error.message);
            })
        }


  return (
    <div>
      <form onSubmit={loginAccount}>
        <h1>Login Account</h1>
        <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
        />
        <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
      {user ? (
        <div>
       <h2>Logged in as: {user.email}</h2>
       <button onClick={logout}>Logout</button>
       </div>
      ): <p>You Are Not Logged In</p>}

    </div>
  )
}

export default Login
