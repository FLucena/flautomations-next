import Announcement from "../components/Announcement";
import NavBar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <Announcement />
        <NavBar/>
        <Slider />
        <Categories />
        <Products />
        <Newsletter/>
        <Footer/>
    </>
  )
}