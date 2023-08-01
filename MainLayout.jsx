import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Newses from "../../Pages/Newses/Newses";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import HomeHeader from "../../Components/Headers/HomeHeader";

export default function MainLayout({ langItems, mode, setMode }) {
    return (
        <>
            <div className="container">
                <HomeHeader
                    lang={langItems}
                    mode={mode}
                    setMode={setMode} />
                <Routes>
                    <Route path="/" element={<Home lang={langItems} mode={mode} setMode={setMode} />} />
                    <Route path="/blog" element={<Newses />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    )
}