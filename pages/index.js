import Script from "next/script";
import About from "../components/about";
import TopBlogs from "../components/Blog/TopBlogs";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Banner from "../components/Header/Banner";
import Navigation from "../components/Header/Navigation";
import MakeReservation from "../components/makeReservation";
import OurMenu from "../components/ourMenu/ourMenu";
import Statistics from "../components/Statistics";
import TeamSection from "../components/TeamSection/TeamSection";
import SpecialSection from "../components/todaysSpecialFood/todaySpecialFood";

function Home() {
  return (
    <>
      <Banner />
      {/* <div style={{marginTop: "120px"}}></div> */}
      <Navigation />
      <About />
      <SpecialSection />
      <OurMenu />
      <MakeReservation />
      <TeamSection />
      <Statistics />
      <TopBlogs />
      <Gallery />
      <Script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      />
    </>
  );
}

export default Home;
