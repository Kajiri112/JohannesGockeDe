import * as React from 'react';

import { useTranslation } from 'react-i18next';

import Styles from "./Footer.module.css";

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const { t } = useTranslation();

    return (
        <div id="Contact" className={Styles.contactSection + " " + Styles.altBackGround} >
            <div className={Styles.title}>{t("CONTACT_ME")}</div>
            <div className={Styles.contactLinks}>
                <div className={Styles.contactLink}><i className="fas fa-envelope"></i> johannes_gocke(at)hotmail.de</div>
                <div className={Styles.contactLink}><i className="fab fa-git"></i> <a href="https://github.com/master117">{t("GITHUB")}</a></div>
                <div className={Styles.contactLink}><i className="fab fa-xing"></i> <a href="https://www.xing.com/profile/Johannes_Gocke/cv">{t("XING")}</a></div>
            </div>
            <hr />
            <div>&copy; {new Date().getFullYear()} - Johannes Gocke</div>
        </div>
    );
};

export default Footer;
