import { ModelS } from "../assets/Image";
import { DownSVG } from "../assets/svg";

export const Section = () => {
  return (
    <section id="#modelS" className="car_section">
      <img src={ModelS} alt="Model S Image" className="car_image" />

      <div className="car_details transform_50">
        <h1 className="model_name">Model S</h1>
        <h2 className="tag_line">
          Order Online for{" "}
          <span className=" underline">Touchless Delivery</span>
        </h2>
      </div>

      <div className="car_buttons transform_50">
        <button className="btn">Custom Order</button>
        <button className="btn inventory">Existing Inventory</button>
      </div>
      <DownSVG classes="down_svg" linkTo="#modelS" />
    </section>
  );
};
