import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
    return (
        <div className="app">

            <Header />

            <Navbar />

            <main className="main-content">
                {children}
            </main>

            <Footer />

        </div>
    );
}

export default MainLayout;