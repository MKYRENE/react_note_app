function Header(propsObj) {
  const changePage = (e) => {
    e.preventDefault();

    const link = e.target;
    const text = link.innerText;
    console.log(text);

    switch (text) {
      case 'About':
        propsObj.setPage('about');
        break;
      case 'Contact':
        propsObj.setPage('contact');
        break;
      default:
        propsObj.setPage('landing');
    }
  };

  const toggleDarkMode = () => {
    propsObj.setDarkMode(!propsObj.darkMode);
  };

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>

      <div onClick={toggleDarkMode} className="dark-mode-toggle">
        <span className={`dark-mode ${propsObj.darkMode ? 'dark' : ''}`} />
      </div>

      <nav>
        <a
          onClick={changePage}
          className={propsObj.page === 'landing' ? 'active' : ''}
          href="/"
        >
          Home
        </a>
        <a
          onClick={changePage}
          className={propsObj.page === 'about' ? 'active' : ''}
          href="/about"
        >
          About
        </a>
        <a
          onClick={changePage}
          className={propsObj.page === 'contact' ? 'active' : ''}
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
