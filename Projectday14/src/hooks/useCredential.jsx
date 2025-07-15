import { useEffect, useState } from "react"
import userDetails from '../data/user.json'

const useCredential = () =>{
   const id = localStorage.getItem('uId')
   const [user, setUser] = useState({})

   //Getting userinfo from backend api(for this time we are using sample data from frontend)

   const userData = () => {
    const fetchData = async() =>{
        try{
            const tempUser = userDetails.find(u => u._id === id) || {} setUser(tempUser)
        }
        catch(err){
            console.log(err);
            fetchData()
        }
    }
    fetchData()
   }

   //Login persist
   useEffect(()=>{
    if(id){
        userData()
    }
    else{
        setUser({})
    }
   },[])

   //Logout
   const logout = () =>{
         localStorage.removeItem('uId')
         setUser({})

   }
   return{
    user,
    setUser,
    logout,
   }
}

export default useCredential;