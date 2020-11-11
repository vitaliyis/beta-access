import {NavLink} from "react-router-dom";

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mr-5">Logo</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/page1">page1</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/page2">page2</NavLink>
            </li>

          {/*<li className="nav-item">*/}
          {/*  <NavLink*/}
          {/*    className="nav-link"*/}
          {/*    to="/login"*/}
          {/*  >Выйти</NavLink>*/}
          {/*</li>*/}

        </ul>

      </div>
    </nav>
  )
}