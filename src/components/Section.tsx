import { sectionProps } from "../assets/All.Types";
import { DownSVG } from "../assets/svg";

export const Section = (props: sectionProps) => {
  const {
    sectionId,
    sectionClasses,
    sectionImg,
    sectionImgAlt,
    sectionImgClasses,
    sectionDetailsName,
    DownSVGClasses,
    DownSVGLinkTo,
    downSVG,
    orderButton,
  } = props;

  return (
    <section id={sectionId} className={sectionClasses}>
      <img src={sectionImg} alt={sectionImgAlt} className={sectionImgClasses} />

      <div className="car_details transform_50">
        <h1 className="model_name">{sectionDetailsName}</h1>
        <h2 className="tag_line">
          Order Online for{" "}
          <span className=" underline">Touchless Delivery</span>
        </h2>
      </div>

      {orderButton && (
        <div className="car_buttons transform_50">
          <button className="btn">Custom Order</button>
          <button className="btn inventory">Existing Inventory</button>
        </div>
      )}

      {downSVG && <DownSVG classes={DownSVGClasses} linkTo={DownSVGLinkTo} />}
    </section>
  );
};
