import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import InfoContent from "./InfoContent";

function Container() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  return (
    <div className={`container ${isLoginActive ? "" : "active"}`}>
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      <LoginForm switchForm={() => setIsLoginActive(false)} />
      <RegisterForm switchForm={() => setIsLoginActive(true)} />

      {isLoginActive ? (
        <InfoContent
          type="Login"
          title="WELCOME BACK!"
          text="We are happy to have you with us again. If you need anything, we are here to help."
        />
      ) : (
        <InfoContent
          type="Register"
          title="WELCOME!"
          text="We’re delighted to have you here. If you need any assistance, feel free to reach out."
        />
      )}
    </div>
  );
}

export default Container;
