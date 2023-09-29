import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";

const Login = ({ name }) => {
  const { createUser, handleGoogleSignUp, login } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (name === "login") {
      setIsLogin(true);
    }
  }, [name]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isLogin) {
      createUser(userName, password)
        .then((result) => {
          console.log("User: " + userName + " Password: " + password);
          console.log(result?.user);
        })
        .catch((error) => {
          console.error("error: " + error);
        });
    } else {
      login(userName, password)
        .then((result) => {
          console.log("User: " + userName + " Password: " + password);
          console.log("user: " + result);
        })
        .catch((error) => {
          console.log("error: " + error);
        });
    }
  };
  const handleGoogleSignIn = () => {
    handleGoogleSignUp()
      .then((result) => {
        console.log(result?.user);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <dir className="w-1/2 h-1/2 flex justify-center items-center flex-col p-10 bg-slate-100 w- h-full rounded-xl">
        <h1 className="mb-7 text-4xl">{name}</h1>
        <form className="flex flex-col gap-5 mb-5" onSubmit={handleSubmit}>
          <label htmlFor="user_name">User Name</label>
          <input
            onChange={(event) => setUserName(event?.target?.value)}
            type="email"
            required
            id="user_name"
            name="user_name"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => setPassword(event?.target?.value)}
            type="password"
            required
            id="password"
            name="password"
          />
          <input type="submit" className="btn" />
        </form>
        {!isLogin && (
          <button className="btn" onClick={handleGoogleSignIn}>
            Google Sign In
          </button>
        )}
      </dir>
    </div>
  );
};

export default Login;
