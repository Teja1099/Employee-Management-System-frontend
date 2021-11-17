import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { useContext, useState } from "react";
import AuthContext from "../context/auth-context";

function MainNavigation() {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn; //true;

  const handleLogout = () => {
    authCtx.logout();

    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">
                <FontAwesomeIcon icon={faSignInAlt} />
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/employees"> Team</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/leave-tracker"> Leave Tracker</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/interview-tracker"> Interview Tracker</Link>
            </li>
          )}
          {/* <li>
            <Link to="/sign-up"> Sign Up</Link>
          </li> */}

          {isLoggedIn && (
            <li>
              <button className="btn btn-md bg-dark" onClick={handleLogout}>
                <span className="text-white">
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Logout
                </span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
