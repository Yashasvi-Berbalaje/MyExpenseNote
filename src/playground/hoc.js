import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>{
    return(
        <div>
        <h1>Welcome {props.name}</h1>
        <p>This is the details user:</p>
        </div>
    )
}

const requiredAuthentication= (Info) =>{
    return (props)=>(
        <div>
       {props.isAuthenticated===false?<p>Invalid Username or Password</p>:
        <Info {...props} />}
        </div>
      ) 
    }
const AuthInfo=requiredAuthentication(Info);
export default AuthInfo;