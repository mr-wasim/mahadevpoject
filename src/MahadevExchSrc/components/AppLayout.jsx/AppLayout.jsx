import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BottomNav from "../BottomNav/BottomNav";

const AppLayout = () => {
  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
<BottomNav/>
      <Footer />
    </>
  );
};

export default AppLayout;
