import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fetch from "./pages/Fetch";
import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";
import Hello from "./pages/Hello";
import Subscription from "./pages/Subscription";
import NewsDetail from "./pages/NewsDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPass from "./pages/ForgetPass";
import ResetPass from "./pages/ResetPass";
import Testing from "./pages/Testing";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path="/hello" element={<Hello />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/" element={<Feed />} />
      <Route path="/home" element={<Home />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/detail" element={<NewsDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/resetpass" element={<ResetPass />} />
      <Route path="/forgetpass" element={<ForgetPass />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
