import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/location/Footer";
function App() {
  return (
    <div className="App" style={{ height: "1500px" }}>
      <Header />
      <Element name="featured">
      <Featured />
      </Element>

      <Element class="venue">
      <VenueNfo />
      </Element>

      <Element name="highlights">
        <Highlight />
      </Element>

     <Element name="pricing">
      <Pricing />
      </Element>

      <Element class="location">
      <Location /> 
      </Element>
      <Footer />
    </div>
  );
}

export default App;
