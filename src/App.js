import React from "react";
import { Route, Routes } from "react-router-dom";

import { NotFound } from "./components/NotFound";
import SubCatPage from "./pages/SubCatPage";
import Subscription from "./pages/Subscription";
import NewsDetail from "./pages/NewsDetail";

import Testing from "./old_pages/Testing";
import Feed from "./pages/Feed";
import Hello from "./old_pages/Hello";
import Home from "./old_pages/Home";
import Fetch from "./old_pages/Fetch";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgetPass from "./pages/auth/ForgetPass";
import ResetPass from "./pages/auth/ResetPass";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/detail" element={<NewsDetail />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/search" element={<SubCatPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/old-home" element={<Home />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
