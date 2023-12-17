import { apartments } from "../../data/apartments.ts";

const ApartmentsCard = () => {
  const prDef = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <div className="apartments_cards">
      {apartments?.map((item) => (
        <a href="#" onClick={prDef} className="card" key={item.id}>
          <img src={item.img} alt={item.alt} className="card_img" />
          <h3 className="card_title">{item.title}</h3>
        </a>
      ))}
    </div>
  );
};

export default ApartmentsCard;
