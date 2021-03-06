import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStatevalue } from "../StateProvider";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStatevalue();

  const signIn = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://logolook.net/wp-content/uploads/2021/06/Whatsapp-Logo.png" />

        <div className="login__text">
          <h1>This is whatsapp bit</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Signin with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
