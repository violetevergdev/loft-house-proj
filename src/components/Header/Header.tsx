import HeaderNav from "./HeaderNav.tsx";
import HeaderMain from "./HeaderMain.tsx";
import HeaderFooter from "./HeaderFooter.tsx";

const Header = () => {
  return (
    <header className="header">
      <HeaderNav />

      <HeaderMain />

      <HeaderFooter />
    </header>
  );
};

export default Header;
