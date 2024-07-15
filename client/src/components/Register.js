// import React,{Fragment,useState} from "react";
// import { Link } from "react-router-dom";

// const Register = ({setAuth}) =>{

// const [inputs,setInputs] = useState({
//     name: "",
//     email: "",
//     password: ""
    
// });
// const {name,email,password} = inputs;

// const onChange = (e) =>{
//     setInputs({...inputs,
//         [e.target.name] : e.target.value });
        
// };

// const onSubmitForm = async (e)=>{
//     e.preventDefault();

//     try {

//         const body = {name,email,password};

//         const response = await fetch("http://localhost:5000/auth/register",{
//             method:"POST",
//             headers: {"Content-Type": "application/json"},

//             body:JSON.stringify(body)


//         });

//         const parseRes = await response.json();

//  localStorage.setItem("token" ,parseRes.token);
// setAuth(true);     

//     } catch (err) {
//         console.error(err.message);
        
//     }

// }

//     return(
// <Fragment>
//     <h1 className="text-center my-5">Register</h1>

// <form onSubmit={onSubmitForm}>
//     <input  type="text" 
//     name="name" 
//     placeholder="name" 
//     className="form-control my-4"
//     value={name}
//     onChange={onChange}
//     />

//     <input type="email" 
//     placeholder="email"
//      name="email" 
//      className="form-control my-4"
//      value={email}
//      onChange={onChange}
//      />
//     <input type="password" 
//     placeholder="password" 
//     name="password" 
//     className="form-control my-4" 
//     value={password}
//     onChange={onChange}
//     />
  
//   <button type="submit" className="btn btn-success btn-block">Submit</button>
// </form>

// <Link to="/login">Login</Link>

// </Fragment>
//     )
// };

// export default Register;

import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";



const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
    //   const newUser = { name, email, password };

    //   const response = await post("http://localhost:5000/auth/register", newUser);

    //   // Handle success response
    //   const { data } = response;
    //   localStorage.setItem("token", data.token);
    //   setAuth(true);

    const Register = {name,email,password};

        const response = await fetch("http://localhost:5000/auth/register",{
            method:"POST",
            headers: {"Content-Type": "application/json"},

            body:JSON.stringify(Register)


        });

        const data =   response.json();

 localStorage.setItem("token" ,data.token);
setAuth(true);     
    } catch (err) {
      // Handle error response
      if (err.response && err.response.data && err.response.data.message) {
        console.error(err.response.data.message);
      } else {
        console.error("Server error occurred.");
      }
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>

      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control my-4"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control my-4"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form-control my-4"
          value={password}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-success btn-block">
          Submit
        </button>
      </form>

      <Link to="/login">Login</Link>
    </Fragment>
  );
};

export default Register;

