import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-gradient-to-r from-fuchsia-900 via-black to-cyan-900  ">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
