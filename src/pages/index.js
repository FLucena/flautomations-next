import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const defaultLang = "es";

  return (
    <>
        <Announcement />
        <Slider lang={defaultLang}/>
        <Newsletter lang={defaultLang}/>
    </>
  )
}