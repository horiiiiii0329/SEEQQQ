import Logo from "./UI/Logo";

function Header() {
  return (
    <header className="flex">
      <div>
        <Logo />
      </div>
      <nav>
        <p>ログイン</p>
        <p>会員登録</p>
      </nav>
    </header>
  );
}

export default Header;
