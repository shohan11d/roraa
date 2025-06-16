function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10 ">
      <div className="contaner flex h-14 items-center max-lg:px-5">
        <a href="">
          <img src="/images/xora.svg" width={115} height={55} alt="Xora" />
        </a>
      </div>
    </header>
  );
}

export default Header;
