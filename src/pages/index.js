import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  const defaultLang = "es";

  return (
    <>
        <Announcement />
        <Navbar lang={defaultLang}/>
        <Slider lang={defaultLang}/>
        <Newsletter lang={defaultLang}/>
        <Footer lang={defaultLang}/>
    </>
  )
}