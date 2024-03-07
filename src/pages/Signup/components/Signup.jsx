import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { object, string } from "yup";
import { Bounce, toast } from "react-toastify";

function Signup() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });
  const [Error, serError] = useState([]);
  const [loder, setLoder] = useState(false);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handelImageChange = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  const validateData = async () => {
    const RegisterSchema = object({
      userName: string().required(),
      email: string().email().required(),
      password: string().min(8).max(20).required(),
      image: string().required(),
    });
    try {
      await RegisterSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      serError(error.errors);
      return false;
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoder(true);
    if (await validateData()) {
      const formData = new FormData();
      formData.append("userName", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/signup`,
          formData
        );

        if (data.message == "success") {
          toast.success("Email Created succesfuly", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    }
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {Error.length > 0
              ? Error.map((error1, index) => (
                  <div className="alert alert-danger" role="alert" key={index}>
                    {error1}
                  </div>
                ))
              : null}
            <form className="formInput" onSubmit={handelSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                  placeholder="Enter name"
                  onChange={handelChange}
                  value={user.userName}
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handelChange}
                  value={user.email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group mt-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={handelChange}
                  value={user.password}
                />
              </div>

              <div className="form-group pt-3">
                <label htmlFor="exampleFormControlFile1" className="mx-2">
                  Please enter your photo
                </label>
                <input
                  type="file"
                  name="image"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={handelImageChange}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                {!loder ? "Submit" : "Loading..."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
