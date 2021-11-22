import React, { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Loader from "./components/Loader";
import UserCards from "./components/UserCards";


function App() {

  const [users, setUser]  = useState([{ id: "",email: "",first_name: "",last_name: "",avatar: ""}]);
  const [isLoading, setLoading] = useState(false); 
  const [show, setShow] = useState(false);


 
     const getUsers = async() => {
        try{
            const result = await axios(`https://reqres.in/api/users?page=1`)
            setUser(await result.data.data);
            setShow(true);
            
            setLoading(true);
            setTimeout(() => {
                  setLoading(false);
               }, 3000)
        }
        catch(error){
            console.log("Error is: " + error);
        }     
      };
        
        
        return (
          <div>
              <Navbar onClick ={getUsers}/>
              { isLoading? <Loader /> :null }
               {show && !isLoading ? <UserCards users={users} />: null}
          
          </div>);
}

export default App;
