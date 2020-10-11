import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import Styles from "./Navbar.module.css";

interface INavbarProps extends RouteComponentProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    console.log(props.location.pathname)
  return (
      <React.Fragment>
          <div className={Styles.navBar}>
            <NavLink to="/" className={Styles.link + " " + (props.location.pathname === "/" ? Styles.active : "")}>Home</NavLink>
            <NavLink to="/software" className={Styles.link + " " + (props.location.pathname === "/software" ? Styles.active : "")}>Software</NavLink>
            <NavLink to="/research" className={Styles.link + " " + (props.location.pathname === "/research" ? Styles.active : "")}>Forschung</NavLink>
            <NavLink to="/impressum" className={Styles.link + " " + (props.location.pathname === "/impressum" ? Styles.active : "")}>Impressum/Privacy</NavLink>
          </div>
          <div className={Styles.dummy}>

          </div>
      </React.Fragment>
  );
};

export default withRouter(Navbar);
