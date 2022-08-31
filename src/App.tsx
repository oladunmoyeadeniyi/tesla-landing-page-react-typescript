import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import {
  Model3,
  ModelS,
  ModelX,
  ModelY,
  SolarPanel,
  SolarRoof,
} from "./assets/Image";

function App() {
  return (
    <div>
      {/* The Navbar */}
      <NavBar />
      {/* Model S Section */}
      <Section
        sectionId="#modelS"
        sectionClasses="car_section"
        sectionImg={ModelS}
        sectionImgAlt="Model S Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Model S"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#modelS"
        orderButton
        downSVG
      />
      {/* Model 3 Section */}
      <Section
        sectionId="#model3"
        sectionClasses="car_section"
        sectionImg={Model3}
        sectionImgAlt="Model 3 Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Model 3"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#model3"
        orderButton
        downSVG
      />{" "}
      {/* Model X Section */}
      <Section
        sectionId="#modelX"
        sectionClasses="car_section"
        sectionImg={ModelX}
        sectionImgAlt="Model X Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Model X"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#modelX"
        orderButton
        downSVG
      />
      {/* Model Y Section */}
      <Section
        sectionId="#modelY"
        sectionClasses="car_section"
        sectionImg={ModelY}
        sectionImgAlt="Model Y Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Model Y"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#modelY"
        orderButton
        downSVG
      />
      {/* Solar Roof Section */}
      <Section
        sectionId="#solarRoof"
        sectionClasses="car_section"
        sectionImg={SolarRoof}
        sectionImgAlt="Solar Roof Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Solar Roof"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#solarRoof"
        orderButton
        downSVG
      />
      {/* Solar Panel Section */}
      <Section
        sectionId="#solarPanel"
        sectionClasses="car_section"
        sectionImg={SolarPanel}
        sectionImgAlt="Solar Panel Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Solar Panel"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#solarPanel"
        orderButton
        downSVG
      />
      {/* Solar Roof Section */}
      <Section
        sectionId="#solarPanel"
        sectionClasses="car_section"
        sectionImg={SolarPanel}
        sectionImgAlt="Solar Panel Image"
        sectionImgClasses="car_image"
        sectionDetailsName="Solar Panel"
        DownSVGClasses="down_svg"
        DownSVGLinkTo="#solarPanel"
        orderButton
        downSVG
      />
    </div>
  );
}

export default App;
