import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
export default Layout;