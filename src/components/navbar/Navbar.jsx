import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="main-wrapper">
        <header>
          <div className="row">
            <div className="navbar">
              <a href="">
                <img
                  className="brand"
                  src="https://www.coding.id/images/coding_id_logo.png"
                  alt=""
                />
              </a>
              <div className="right-section">
                <nav>
                  <ul className="navbar-nav">
                    <li>
                      <a href="">Corporate Training</a>
                    </li>
                    <li>
                      <a href="">Bootcamp</a>
                    </li>

                    <li>
                      <a href="">Course</a>
                    </li>
                    <li>
                      <a href="">Events</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Kontak</a>
                    </li>
                    <li>
                      <a href="">Masuk</a>
                    </li>
                    <button className="button-nav">Buat Akun</button>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
