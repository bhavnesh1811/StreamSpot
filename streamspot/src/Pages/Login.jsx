import { Divider, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import "../index.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const { loginUser, authState } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ok");
    let res = await fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    // console.log(res);
    loginUser(res.token, username);
  };

  if (authState.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Text textAlign={"center"} marginBottom={"20px"}>Login Details</Text>
      <div
        className="login-page"
        style={{
          margin: "0px auto 0px auto",
          width: "30%",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          background: "gray.100",
          padding:"30px"
        }}
      >
        <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
          <div>
            <label>
        
              <input
                style={{
                  width: "313px",
                  maxWidth:"100%",
                  padding: "10px",
                  borderRadius: "20px",
                  margin: "10px",
                }}
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
        
              />
            </label>
          </div>

          <div>
            <input className="signinform"
              style={{
                width: "313px",
                maxWidth:"100%",
                padding: "10px",
                borderRadius: "20px",
                margin: "20px 0px 20px 10px",
                
              }}
              value="Signin"
              onClick={handleSubmit}
              type="submit"
            />
          </div>
        </form>
        <div style={{ textAlign: "center",marginBottom: "15px" }}>
          <Link  className="message" to="/">
            Go Back
          </Link>
        </div>
        <Divider/>
      </div>
      <Divider borderColor={"red.300"} marginTop={"20px"}/>
    </>
  );
};

export default Login;
