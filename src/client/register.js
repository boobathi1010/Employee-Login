import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Register(){
    function handlelogined(event){
        event.preventDefault()
        var name=document.getElementById("name").value
        var phoneno=document.getElementById("phoneno").value
        var city=document.getElementById("city").value
        var email=document.getElementById("email").value
        var designation=document.getElementById("designation").value
        var password=document.getElementById("pwd").value

        var key={
            name:name,
            phoneno:phoneno,
            city:city,
            email:email,
            designation:designation,
            password:password
        }

        if(name==''){
            alert("Enter the first name")
        }
        else if(phoneno==''){
            alert("Enter the phone number")
        }
        else if(city==''){
            alert("Enter the city")
        }
        else if(email==''){
            alert("Enter the email")
        }
        else if(designation==''){
            alert("Enter the Designation")
        }
        else if(password==''){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:1018/inserted",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are inserted")
                    window.location.href='/login'
                }
            })
        }
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="mb-4">Employee Register</h2>
                        <form onSubmit={handlelogined}>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" className="form-control" id="phoneno" placeholder="Enter your phone number"/>
                            </div>
                            <div class="form-group">
                                <label for="city">City</label>
                                <input type="text" className="form-control" id="city" placeholder="Enter your city"/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                            </div>
                            <div class="form-group">
                                <label for="designation">Designation</label>
                                <input type="text" className="form-control" id="designation" placeholder="Enter your designation"/>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter your password"/>
                            </div>
                            <div>
                                <input type="submit" value="Register" className="btn btn-primary text-center"/>
                            </div>
                            <div>
                                <span>Already have an Account?</span>
                                <Link to='/Login' className="btn-dark p-2 text-primary">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}