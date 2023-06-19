import React, { useEffect, useRef } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/slices/users/usersAPI";
import { logIn, selectUsers } from "../../store/slices/users/usersSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { currentUser, usersData } = useSelector(selectUsers);
  const formRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  console.log(currentUser);
  useEffect(() => {
    if (!usersData.length) {
      dispatch(fetchUsers());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [{ value: login }, { value: password }] = formRef.current;
    dispatch(logIn({ login, password }));

    formRef.current.reset();
  };

  return (
    <div className="login">
      <div className="login-body">
        <div className="log-left">
          <img
            className="img1"
            width={700}
            height={700}
            src={require("../../images/login.png")}
            alt=""
          />
          <img
            className="img2"
            width={700}
            height={700}
            src={require("../../images/login.png")}
            alt=""
          />
        </div>
        <div className="log-right">
          <span>
            <img
              width={250}
              style={{ cursor: "pointer" }}
              src={require("../../images/Logo-Instagram.png")}
              alt=""
            />
          </span>
          <form ref={formRef} onSubmit={handleSubmit}>
            {" "}
            <input
              defaultValue={"bret"}
              type="text"
              placeholder="Phone,number,username or email"
            />
            <input
              defaultValue={"Apt.556"}
              type="text"
              placeholder="Password"
            />
            <button className="butt" type="submit">
              Log in
            </button>
            <button type="button" className="whFac">
              <img
                width={25}
                src={require("../../images/facebook.png")}
                alt=""
              />

              <p>Log in with Facebook </p>
            </button>
            <button className="forg" type="button">
              Forgot password?
            </button>
          </form>
          <div className="bottom">
            Don't have an account?{" "}
            <span>
              <button className="sign" type="bottom">
                Sign up
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
