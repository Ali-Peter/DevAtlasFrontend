import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./utilities/loading";
import Work from "./pages/work";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";

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
        path: "/work",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Work />
            </React.Suspense>
        )
    },
    {
        path: "/blog",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Blog />
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
])

export default Routes