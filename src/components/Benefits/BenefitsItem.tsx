import { benefits } from "../../data/benefits.ts";

const BenefitsItem = () => {
  return (
    <div className="benefits_row">
      {benefits?.map((item) => (
        <div className="benefits_item" key={item.id}>
          <img src={item.img} alt={item.alt} className="benefits_item-img" />
          <p className="benefits_item-text">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsItem;
