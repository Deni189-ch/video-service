import React from "react"
import { useHistory } from "react-router-dom";


export const withAuthRedirect = ( Component: any ) => {
  
  function RedirectComponent() {
    let history = useHistory();
    //@ts-ignore
    const isAuth = JSON.parse(localStorage.getItem("isAuth"))

    if (isAuth) {
      return Component
    } else {
      return history.push("/login")
    }
    
  }

  return RedirectComponent
};

