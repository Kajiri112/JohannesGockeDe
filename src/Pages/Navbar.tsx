import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Styles from "./Navbar.module.css";

interface INavbarProps extends RouteComponentProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const { t } = useTranslation();
    console.log(props.location.pathname)
  return (
      <React.Fragment>
          <div className={Styles.navBar}>
            <NavLink to="/" className={Styles.link + " " + (props.location.pathname === "/" ? Styles.active : "")}>Home</NavLink>
            <NavLink to="/software" className={Styles.link + " " + (props.location.pathname === "/software" ? Styles.active : "")}>{t("SOFTWARE")}</NavLink>
            <NavLink to="/research" className={Styles.link + " " + (props.location.pathname === "/research" ? Styles.active : "")}>{t("RESEARCH")}</NavLink>
            <NavLink to="/impressum" className={Styles.link + " " + (props.location.pathname === "/impressum" ? Styles.active : "")}>{t("IMPRESSUM")}</NavLink>
          </div>
          <div className={Styles.dummy}>

          </div>
      </React.Fragment>
  );
};

export default withRouter(Navbar);
