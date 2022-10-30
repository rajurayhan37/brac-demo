import { Fragment } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Layout({ children }) {
    return (
        <div className="font-poppins">
            <Navbar/>
            <main className="px-12 mx-auto">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;
