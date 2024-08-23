function Header() {
  const c1 = "Us";
  const c2 = "Works"
  
    return (
    <header>
      <h1> Learning React js</h1>
      <hr />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>{c1}</li>
          <li>Contact</li>
          <li>{c2}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
