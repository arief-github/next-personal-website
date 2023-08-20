import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({children}: any) {
    return (
        <>
            <Navbar pageId={children.props.pageId}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
};