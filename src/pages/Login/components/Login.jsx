import axios from "axios";
import React, { useState } from "react";

function Login() {

  const [user,setUser]=useState({
    email: "",
    password: "",
  });
  const handelChange =(e)=>{
    const { name,value } = e.target;
    setUser({
      ...user,
      [name]:value,
    })
    console.log(user);
  }

  const handelSubmit=async(e)=>{
    e.preventDefault();
      const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,user)
      console.log(data)
  }
  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handelSubmit}>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handelChange}
                  value={user.email}
                  name="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handelChange}
                  value={user.password}
                  name="password"
                />
              </div>
            
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
