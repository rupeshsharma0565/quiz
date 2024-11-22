import React, { createContext, useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
const MainContext = createContext()

export default function Context(props) {
    const [user,setUser] = useState(null)
    const [quizs, setQuizs] = useState([]);

    const fetchData = () => {
      const db = getDatabase();
      const starCountRef = ref(db, 'quiz/');
      onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          // console.log(data)
          const arr = Object.keys(data).map((d, i) => {
              return { id: d, ...data[d] } //data[d] d ma id hai to pura object aa gya samghe ..
          })
          setQuizs(arr)
      });
  }

  useEffect(
      () => {
          fetchData()
      }, []
  )


    useEffect(
        ()=>{
             const lsUser = localStorage.getItem("user");
             if(lsUser != undefined){
                setUser(JSON.parse(lsUser))
             }
        },[]
    )

    const login = (data) =>{
           setUser(data);
           localStorage.setItem("user",JSON.stringify(data))
    }

    const logout = (data) =>{
        setUser(null);
        localStorage.removeItem("user")
 }
   
  return (
    <MainContext.Provider  value={{user,setUser,login,logout,quizs}}>
       {
         props.children
       }
    </MainContext.Provider>
  )
}

export { MainContext }

