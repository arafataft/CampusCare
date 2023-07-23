import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import College from "../Pages/Colleges/College";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Register></Register>
            },
            {
                path:'/colleges/:id',
                element:<CollegeDetails></CollegeDetails>
            },
            {
                path:'/colleges',
                element:<College></College>
            },
            {
                path:'/admission',
                element:<Admission></Admission>
            },
            {
                path:'/mycollege',
                element:<MyCollege></MyCollege>
            }
        ]
    }
]);

export default router;