import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Destination from "../pages/Destination/Destination";
import MapAndRooms from "../pages/MapAndRooms/MapAndRooms";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/destination',
            element: <Destination/>
        },
        {
            path: '/map',
            element: <MapAndRooms/>
        }
    ]
}])