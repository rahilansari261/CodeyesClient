import "./App.css";
import "./styles/custom.css";
import Home from "./app/home/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./app/about/About";
import Contact from "./app/contact/Contact";
import Portfolio from "./app/portfolio/Portfolio";
import Faq from "./app/faq/Faq";
import NotFound from "./app/not-found/NotFound";
import Post from "./app/blog/post/Post";
import Blog from "./app/blog/Blog";
import PortfolioSlug from "./app/portfolio/portfolio-slug/PortfolioSlug";
import Services from "./app/services/Services";
import ChildServices from "./app/services/services-slug/ChildServices";
import Career from "./app/career/Career";
import OurClient from "./app/our-client/OurClient";
import OurTeam from "./app/our-team/OurTeam";
import PrivacyPolicy from "./app/privacy-policy/PrivacyPolicy";
import TermsOfUse from "./app/terms-of-use/TermsOfUse";
import ScrollToTop from "./component/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import appStore from "./utils/store";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <ToastContainer />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ChildServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio-slug/:id" element={<PortfolioSlug />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/career" element={<Career />} />
          <Route path="/our-client" element={<OurClient />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
