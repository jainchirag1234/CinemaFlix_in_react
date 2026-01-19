import { NavLink } from "react-router-dom";

export const Header = () => {
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "green" : "black",
  });

  return (
    <header className="section-navbar">
      {/* Top bar */}
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Get Membership, 30-day return or refund guarantee.</p>
          </div>
          <div className="sing_in_up">
            <NavLink to="/signin">SIGN IN</NavLink>
            <NavLink to="/signup">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/">
            <p>CinemaFlix</p>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                // style={({ isActive }) => ({
                //   color: isActive ? "red" : "black",
                // })}
              >
                About
              </NavLink>
            </li>

            {/* Movies */}
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>
                Movies
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
