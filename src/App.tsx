import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import ContactUs from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Navbar from "./components/NavBar";
import SvgIcon from "./components/SvgIcon";
import MainLogoPath from "./components/Logos/MainLogoPath";
import Footer from "./components/Footer";

library.add(fas);

// const underLineColor = "#6E6EFF";
const navbarLogoBg = "#2C2CCC";
function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar
        logo={
          <SvgIcon width={40} height={40}>
            <MainLogoPath color={navbarLogoBg} />
          </SvgIcon>
        }
      />
      <div className="min-h-[400px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
