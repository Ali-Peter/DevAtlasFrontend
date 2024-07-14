import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./utilities/loading";

const Home = lazy(() => import("./home"));

const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading/>}>
                <Home/>
            </React.Suspense>
        )
    }
])

export default Routes