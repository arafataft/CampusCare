import { Outlet } from "react-router-dom";
import MenuBar from "../Pages/Shared/MenuBar/MenuBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;