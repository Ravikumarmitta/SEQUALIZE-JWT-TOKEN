
// import React, { Fragment,useState,useEffect } from "react";

// const Dashboard = ({ setAuth }) => {

//     const [name,setName] = useState("");

//     async function getName(){
//         try {

//             const response = await fetch("http://localhost:5000/dashboard/",{
//              method:"GET",
//              headers:{ token:localStorage.token }
//             });

//             const parseRes =  response;

//             setName(parseRes.user_name);
            
//         } catch (err) {
//             console.error(err.message);
//         }

        
//     }
//     const logout = (e)=>{
//         e.preventDefault();
//         localStorage.removeItem("token");
//         setAuth(false);
//     }

//     useEffect(()=>{
//         getName()
//     },[])
//     return (
//         <Fragment>
//             <h1>Dashboard {name}</h1>
//             <button className="btn btn-primary" onClick={logout}>LogOut</button>
            
//         </Fragment>
//     );
// };

// export default Dashboard;

import React, { Fragment, useState, useEffect } from "react";

const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState("");

    async function getName() {
        try {
        
            const response = await fetch("http://localhost:5000/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const userData =   response.json();
            setName(userData.user_name);
        } catch (err) {
            console.error(err.message);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    };

    useEffect(() => {
        getName();
    }, []);

    return (
        <Fragment>
            <h1>Dashboard {name}</h1>
            <button className="btn btn-primary" onClick={logout}>Log Out</button>
        </Fragment>
    );
};

export default Dashboard;

