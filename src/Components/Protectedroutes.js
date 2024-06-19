import { Navigate, Outlet } from "react-router-dom";
import React, { useState , useEffect } from 'react';
function Protectedroutes(){

    return window.localStorage.getItem('token')? <Outlet /> : <Navigate to="/" />;

}


export default Protectedroutes;