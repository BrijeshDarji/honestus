/**
 *  @description This file is a main routing file,
 *  which handles system's route.
 */

import { Suspense } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import LoadingFallback from "./LoadingFallback.jsx"
import HomeScreen from "../components/pages/HomeScreen.jsx"
import Login from "../components/pages/Login.jsx"
/* import SignUp from "../components/signup/SignUp.jsx" */
import PrivateRoute from "./PrivateRoute.jsx"

import { RouteList } from "./RouteList.js"

import {
    URL_HOME_SCREEN,
    URL_LOGIN,
} from "../assets/constants/SitePath.js"

function Routing() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route exact path={URL_HOME_SCREEN} element={<HomeScreen />} />
                    <Route exact path={URL_LOGIN} element={<Login />} />
                    {/* <Route exact path={URL_SIGN_UP} element={<SignUp />} /> */}
                    {
                        RouteList.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    element={<PrivateRoute Component={route.component} {...route} />}
                                />
                            )
                        })
                    }
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There&apos;s nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Routing
