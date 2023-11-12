import axios from "axios";
import React from "react";

export function Login(){
    function handlelogin(event){
        event.preventDefault()
        var email=document.getElementById("username").value
        var password=document.getElementById("password").value
        var key={
            email:email,
            password:password
        }
        if(email==''){
            alert("Plz Enter Your Username")
        }
        else if(password==''){
            alert("plz Enter Your Password")
        }
        else{
            axios.post("http://localhost:1018/login",key)
            .then((res)=>{
                if(res.data.status==="empty_set"){
                    alert("plz enter the username or register a new one")
                }
                else if(res.data.status==="success"){
                    alert("Successfully Logedin")
                    window.location.href='/employee'
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check your password")
                }
                else if(res.data.status==="error"){
                    alert("All the data are invalid")
                }
                else{
                    alert("plz register your details first")
                }
            })
        }
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h2 className="mb-4">Login</h2>
                        <form onSubmit={handlelogin}>
                            <div className="form-group">
                                <label for="email">Username:</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password:</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}