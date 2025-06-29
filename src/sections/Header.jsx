import { Link as LinkScroll } from "react-scroll";
const NavLink = ({ title }) => {
  return (
    <LinkScroll className="nav-link text-white" to="/">
      {title}
    </LinkScroll>
  );
};

function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 ">
      <div className="contaner flex h-14 items-center  max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2" href="">
          <img src="/images/xora.svg" width={115} height={55} alt="Xora" />
        </a>
        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className="nav-li">
                <NavLink title="features" />
                <div className="dot"></div>
                <NavLink title="pricing" />
              </li>
           
              <li className="nav-logo">
                <LinkScroll>
                  <img
                    src="/images/xora.svg"
                    width={160}
                    height={55}
                    alt="Xora"
                  />
                </LinkScroll>
              </li>
              <li className="nav-li">
                <NavLink title="faq" />
                <div className="dot"></div>
                <NavLink title="download" />
                
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
