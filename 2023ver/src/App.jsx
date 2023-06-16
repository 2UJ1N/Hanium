import React, { useEffect, useState } from "react";

// 페이지 연결
import {
  Login,
  SignUp
} from "./pages/index";

function App() {
  return (
    <>
      <Login />
      <SignUp />
    </>
  );
}

export default App;
