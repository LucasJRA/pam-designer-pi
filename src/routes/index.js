import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/Homescreen";
import ServiceScreend from "../screens/ServiceScreend";
import ServiceScreenmp from "../screens/ServiceScreenmp";
import ServiceScreencs from "../screens/ServiceScreencs";
import SchedulingScreen from "../screens/SchedulingScreen";
import CancellationScreen from "../screens/CancellationScreen";
import AccessibilityScreen from "../screens/AccessibilityScreen";
import AboutScreen from "../screens/AboutScreen";
import Body from "../components/Body";

export default function RoutesRoot(){

    return(

        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/">
                    <Route element={<HomeScreen />} path="/"/>
                    <Route element={<ServiceScreenmp />} path="/mao-e-pe"/>
                    <Route element={<ServiceScreend />} path="/depilacao"/>
                    <Route element={<ServiceScreencs />} path="/cilios-e=sobrancelha"/>
                    <Route element={<SchedulingScreen />} path="/agendamento"/>
                    <Route element={<CancellationScreen />} path="/cancelamento"/>
                    <Route element={<AccessibilityScreen />} path="/acessibilidade"/>
                    <Route element={<AboutScreen />} path="/sobre"/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}