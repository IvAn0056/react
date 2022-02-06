import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import EditAccount from "../pages/EditAccount";
import Layout from "../containers/Layout";
import RecoveryPwd from "../pages/RecoveryPwd";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import MainLogin from "../pages/MainLogin";
import MyOrder from "../pages/MyOrder";
import MyOrders from "../pages/MyOrders";
import SaveAccount from "../pages/SaveAccount";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";


const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value = {initialState}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/create-pwd" element={<Login />} />
          <Route exact path="/pwd-recovery" element={<RecoveryPwd />} />
          <Route exact path="/edit-account" element={<EditAccount />} />
          <Route exact path="/" element={<MainLogin />} />
          <Route exact path="/myorder" element={<MyOrder />} />
          <Route exact path="/myorders" element={<MyOrders />} />
          <Route exact path="/save-account" element={<SaveAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
