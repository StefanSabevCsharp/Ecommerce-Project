import TopHeader from "./components/top-header/TopHeader";
import Header from "./components/site-header/Header";
import HomeSlider from "./components/home-slider/HomeSlider";
import Feature from "./components/site-feature/Feature";
import Footer from "./components/fotter/Footer";
import Brand from "./components/brand/Brand";
import Category from "./components/category/Category";
import LatestProducts from "./components/latest-products/LatestProducts";
import Newsletter from "./components/newsletter/Newsletter";
import FooterBottom from "./components/fotter/FooterBottom";
import RecentProducts from "./components/recent-products/RecentProduct";
import BackToTop from "./components/fotter/BackToTop";
import $ from "jquery";
import { initializeJQueryFunctions } from "../public/js/main";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";



function App() {

    useEffect(() => {
        initializeJQueryFunctions();
      }, []);
    return (
        <>
            <TopHeader />
            <Header />
            <HomeSlider />
            <Feature />
            {/* <Category /> */}
            <LatestProducts />
            {/* <Newsletter /> */}
            {/* <RecentProducts /> */}
            {/* <Brand /> */}
            <Footer />
            <FooterBottom />
            <BackToTop />
        </>
    );
}

export default App;
