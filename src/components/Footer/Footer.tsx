import Nav from "../Nav/Nav.tsx";
import FooterNav from "../Nav/FooterNav.tsx";
import FooterAddress from "./FooterAddress.tsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_grid">
          <div className="footer_logo">
            <a href="#!">
              <img src="./img/logo.svg" alt="Loft House" />
            </a>
          </div>

          <div className="footer_nav">
            <Nav className={"footer_nav-list"} />
          </div>

          <FooterNav />
          <FooterAddress />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
