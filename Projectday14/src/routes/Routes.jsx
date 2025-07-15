import { createBrowserRouter } from "react-router";
import Home from './../pages/home/Home';
import Login from './../pages/login/Login';
import Root from "../components/layout/Root";
import Dashboard from './../pages/dashboard/Dashboard';
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: "login",
                Component: Login
            },
            {
                path:"dashboard",
                Component: Dashboard
            },
            {
                path: "*", // This is the catch-all route
                Component: NotFound
            }
        ]
    }
])
export default router;