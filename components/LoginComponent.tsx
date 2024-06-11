"use client";
import React, { useState } from "react";

const LoginComponent = () => {
  const [cpt, setCpt] = useState(0);
  return <div>Login Component {cpt}</div>;
};

export default LoginComponent;
