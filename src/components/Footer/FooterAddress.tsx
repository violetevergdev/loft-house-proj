import FooterSocials from "./FooterSocials.tsx";

const FooterAddress = () => {
  return (
    <div className="footer_address">
      <ul className="footer_nav-list">
        <li>Адрес: Наб. реки Фонтанки 10-15</li>
        <li>
          Телефон: <a href="tel:+781234567">8 (812) 123-45-67</a>
        </li>
        <li>Отдел продаж: 10:00 - 20:00</li>

        <li>
          E-mail:{" "}
          <a className="link-bold" href="mailto:vip@lofthouse.ru">
            vip@lofthouse.ru
          </a>
        </li>
      </ul>

      <FooterSocials />
    </div>
  );
};

export default FooterAddress;
