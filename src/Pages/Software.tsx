import * as React from 'react';
import { useTranslation } from 'react-i18next';

import carHeadImg from "../Assets/Images/Software/car_round.png";
import carContImg from "../Assets/Images/Software/ErsatzwagenKalender.png";
import boilerHeadImg from "../Assets/Images/Software/Boiler.png";
import boilerContImg from "../Assets/Images/Software/CSharpBoiler.png";
import MMContImg from "../Assets/Images/Software/MagicMirrorFootball.png";

import Styles from "./Software.module.css";

interface ISoftwareProps {
}

const Software: React.FunctionComponent<ISoftwareProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <img className={Styles.introImage} src={carHeadImg} alt="header" />
                <div className={Styles.content}>
                    <div className={Styles.title}>{t("CARLENDAR")}</div>
                    <div className={Styles.subTitle}>{t("COMMERCIAL")}</div>
                    <div className={Styles.desc}>
                        {t("CARLENDAR_TEXT")}
                    </div>
                    <img className={Styles.contentImage} src={carContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>{t("FEATURES")}</div>
                        <ul>
                            <li>{t("CARLENDAR_FEATURE_1")}</li>
                            <li>{t("CARLENDAR_FEATURE_2")}</li>
                            <li>{t("CARLENDAR_FEATURE_3")}</li>
                            <li>{t("CARLENDAR_FEATURE_4")}</li>
                            <li>{t("CARLENDAR_FEATURE_5")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={Styles.card}>
                <img className={Styles.introImage} src={boilerHeadImg} alt="header" />
                <div className={Styles.content}>
                    <div className={Styles.title}>{t("CBOILER")}</div>
                    <div className={Styles.subTitle}>{t("FREEWARE")}</div>
                    <div className={Styles.desc}>
                        {t("CBOILER_TEXT")}
                    </div>
                    <img className={Styles.contentImage} src={boilerContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>{t("FEATURES")}</div>
                        <ul>
                            <li>{t("CBOILER_FEATURES_1")}</li>
                            <li>{t("CBOILER_FEATURES_2")}</li>
                            <li>{t("CBOILER_FEATURES_3")}</li>
                            <li>{t("CBOILER_FEATURES_4")}</li>
                            <li>{t("CBOILER_FEATURES_5")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={Styles.card}>
                <a href="https://github.com/master117/MagicMirror-FootballLeagues" className={Styles.introImage}>
                    <i className="fab fa-github" style={{ verticalAlign: "top" }}></i>
                </a>
                <div className={Styles.content}>
                    <div className={Styles.title}>{t("MM_FOOTBALL")}</div>
                    <div className={Styles.subTitle}>{t("OPEN_SOURCE")}</div>
                    <div className={Styles.desc}>
                        {t("MM_FOOTBALL_TEXT")}
                        <a href="https://github.com/master117/MagicMirror-FootballLeagues">Github</a>.
                    </div>
                    <img className={Styles.contentImage} src={MMContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>{t("FEATURES")}</div>
                        <ul>
                            <li>{t("MM_FOOTBALL_FEATURES_1")}</li>
                            <li>{t("MM_FOOTBALL_FEATURES_2")}</li>
                            <li>{t("MM_FOOTBALL_FEATURES_3")}</li>
                            <li>{t("MM_FOOTBALL_FEATURES_4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
