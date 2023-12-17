import { footerSocials } from "../../data/footerSocials.ts";

const FooterSocials = () => {
  return (
    <div className="footer_address">
      <ul className="footer_socials">
        {footerSocials?.map((item) => (
          <li key={item.id}>
            <a href={item.href}>
              <img src={item.img} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocials;
