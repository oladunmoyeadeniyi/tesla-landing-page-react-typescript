import { Icon } from "../assets/Image";

export const NavBar = () => {
  return (
    <>
      <div className="bg-white text-center py-3 top-0 fixed w-full">
        <a href="#" className=" w-fit underline">
          Read Tesla's 2021 Impact Report
        </a>
      </div>

      <header className="navbar">
        {/* Logo */}
        {/* <img src={Icon} alt="tesla logo" className="w-[120px]" /> */}
        <h1 className="h-6 text-4xl">Tesla</h1>

        {/* Nav Links */}
        <div>
          <a href="#modelS" className="nav_link">
            Model S
          </a>
          <a href="#model3" className="nav_link">
            Model 3
          </a>
          <a href="#modelX" className="nav_link">
            Model X
          </a>
          <a href="#modelY" className="nav_link">
            Model Y
          </a>
          <a href="#solarRoof" className="nav_link">
            Solar Roof
          </a>
          <a href="#solarPanels" className="nav_link">
            Solar Panels
          </a>
        </div>

        {/* Menu */}

        <div>
          <a href="#shop" className="nav_link">
            Shop
          </a>
          <a href="#account" className="nav_link">
            Account
          </a>
          <a href="#menu" className="nav_link">
            Menu
          </a>
        </div>
      </header>
    </>
  );
};
