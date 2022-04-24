// import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios";

// function App() {
//   const [listOfUsers, setListOfUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [userbiokey, setUserbiokey] = useState(0);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     Axios.get("http://localhost:3001/getUsers").then((response) => {
//       setListOfUsers(response.data);
//     });
//   }, []);

//   const createUser = () => {
//     Axios.post("http://localhost:3001/createUser", {
//       name,
//       password,
//       username,
//       userbiokey,
//     }).then((response) => {
//       setListOfUsers([
//         ...listOfUsers,
//         {
//           name,
//           password,
//           username,
//           userbiokey,
//         },
//       ]);
//     });
//   };

//   return (
//     <div className="App">
//       <div className="usersDisplay">
//         {listOfUsers.map((user) => {
//           return (
//             <div>
//               <h1>Name: {user.name}</h1>
//               <h1>Age: {user.password}</h1>
//               <h1>Username: {user.username}</h1>
//               <h1>Username: {user.userbiokey}</h1>
//             </div>
//           );
//         })}
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="Name..."
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//         <input
//           type="number"
//           placeholder="BioKey..."
//           onChange={(event) => {
//             setUserbiokey(event.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Password..."
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//         />
//         <button onClick={createUser}> Create User </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({
    name: "",
    usrname: "",
    password: "",
    userbiokey: -1
  })

  const useSetLoginUser = (user) => {
    if(user != null) {
      setLoginUser(user)
    }
  }

  console.log(user);

  return (
    <div className="App" style={{backgroundColor: "lightsteelblue"}}>
      <div className="bg-lightslategray h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user.name ? <Homepage /> : <Login />
            }
          </Route>
          <Route path="/login"><Login setLoginUser={useSetLoginUser}/></Route>
          <Route path="/register"><Register/></Route>
        </Switch>

      </Router>
      </div>
    </div>
    </div>
  );
}

export default App;