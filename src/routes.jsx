import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./utilities/loading";
import Signup from "./pages/Authentication/signup";
import Login from "./pages/Authentication/login";
import Admin from "./pages/Admin/administrator";
import Work from "./pages/work";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Tutorials from "./pages/tutorials";
import Portfolio from "./pages/portfolio";

const Home = lazy(() => import("./home"));

const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Home />
            </React.Suspense>
        )
    },
    {
        path: "/signup",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Signup />
            </React.Suspense>
        )
    },
    {
        path: "/login",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Login />
            </React.Suspense>
        )
    },
    {
        path: "/adminDashboard",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Admin />
            </React.Suspense>
        )
    },
    {
        path: "/work",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Work />
            </React.Suspense>
        )
    },
    {
        path: "/resume",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Resume />
            </React.Suspense>
        )
    },
    {
        path: "/about",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <About />
            </React.Suspense>
        )
    },
    {
        path: "/contact",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Contact />
            </React.Suspense>
        )
    },
    {
        path: "/tutorials",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Tutorials />
            </React.Suspense>
        )
    },
    {
        path: "/portfolio",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Portfolio />
            </React.Suspense>
        )
    },
])

export default Routes