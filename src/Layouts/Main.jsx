import { Outlet } from "react-router-dom";
import MenuBar from "../Pages/Shared/MenuBar/MenuBar";

const Main = () => {
    return (
        <>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </>
    );
};

export default Main;