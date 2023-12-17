import { footerNavList } from "../../data/footerNav.ts";

const FooterNav = () => {
  return (
    <div className="footer_nav">
      <nav>
        <ul className="footer_nav-list">
          {footerNavList?.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
