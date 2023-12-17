import Nav from "../Nav/Nav.tsx";
import NavBurg from "../Nav/NavBurg.tsx";

const HeaderNav = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="header_top-row">
          <a href="#!">
            <img src="/img/logo.svg" alt="Loft House" />
          </a>

          <div className="header_nav">
            <Nav className={"nav_list"} />
          </div>

          <NavBurg />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
