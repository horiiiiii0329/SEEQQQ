import Logo from "./UI/Logo";

function Header() {
  return (
    <header className="flex items-center justify-between pt-8 px-10 md:px-40 z-20 bg-transparent relative">
      <div>
        <Logo />
      </div>
      <nav className="flex items-center space-x-10 justify-items-end text-base font-extralight md:space-x-20">
        <p>ログイン</p>
        <p>会員登録</p>
      </nav>
    </header>
  );
}

export default Header;
