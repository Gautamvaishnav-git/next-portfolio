import Desktop from "./Desktop";
import MobileMenu from "./Mobile";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden block">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
