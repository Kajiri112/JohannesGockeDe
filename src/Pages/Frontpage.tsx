import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import researchImg from "../Assets/Images/Forschung.png";
import softwareImg from "../Assets/Images/Software.png";
import designImg from "../Assets/Images/Design.png";
import ueberImg from "../Assets/Images/Uebersetzungen.png";

import Styles from "./Frontpage.module.css";

interface IFrontpageProps {
}

const Frontpage: React.FunctionComponent<IFrontpageProps> = (props) => {
    const { t } = useTranslation();

    return (
        <div className={Styles.container}>
            <div className="">
                <div className="">
                    <h2 className={Styles.title}>{t("SOFTWAREANDDESIGN")}</h2>
                    <hr />
                    <p>{t("SOFTWAREANDDESIGN_SUBTITLE")}</p>
                </div>
            </div>
            <div className={Styles.flexRow + " " + Styles.columnSection}>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={softwareImg} alt="Software" />
                    <p className={Styles.roundImageTitle}>{t("SOFTWARE")}</p>
                    <div
                        onClick={() => document.getElementById("Software")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        {t("ROUNDIMAGE_SOFTWARE_SUBTITLE")}
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={researchImg} alt="Forschung" />
                    <p className={Styles.roundImageTitle}>{t("RESEARCH")}</p>
                    <div
                        onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        {t("ROUNDIMAGE_RESEARCH_SUBTITLE")}
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={designImg} alt="Design" />
                    <p className={Styles.roundImageTitle}>{t("ARTDESIGN")}</p>
                    <div
                        onClick={() => document.getElementById("Design")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        {t("ROUNDIMAGE_ARTDESIGN_SUBTITLE")}
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={ueberImg} alt="Translation" />
                    <p className={Styles.roundImageTitle}>{t("TRANSLATION")}</p>
                    <div
                        onClick={() => document.getElementById("Translation")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        {t("ROUNDIMAGE_TRANSLATION_SUBTITLE")}
                    </div>
                </div>
            </div>
            <div id="Software" className={Styles.section + " " + Styles.altBackGround}>
                <div>
                    <div className={Styles.sectionTitle}>{t("PROF_EXPERIENCE")}</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/software">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={softwareImg} alt="Software" />
                            <div className={Styles.imageTileText}>{t("SOFTWARE")}</div>
                            <div className={Styles.imageTileTextFront}>{t("SOFTWARE")}</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        {t("PROF_EXPERIENCE_TEXT")}
                        </p>
                </div>
            </div>
            <div id="Research" className={Styles.section}>
                <div>
                    <div className={Styles.sectionTitle}>{t("HIPS_DONT_LIE")}</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/research">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={researchImg} alt="Research" />
                            <div className={Styles.imageTileText}>{t("RESEARCH")}</div>
                            <div className={Styles.imageTileTextFront}>{t("RESEARCH")}</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        {t("HIPS_DONT_LIE_TEXT")}
                    </p>
                </div>
            </div>
            <div id="Design" className={Styles.section + " " + Styles.altBackGround}>
                <div>
                    <div className={Styles.sectionTitle}>{t("PEKO")}</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={designImg} alt="Design" />
                            <div className={Styles.imageTileText}>{t("ARTDESIGN")}</div>
                            <div className={Styles.imageTileTextFront}>{t("ARTDESIGN")}</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        {t("PEKO_TEXT")}
                    </p>
                </div>
            </div>
            <div id="Translation" className={Styles.section}>
                <div>
                    <div className={Styles.sectionTitle}>{t("COHERENT")}</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={ueberImg} alt="Translation" />
                            <div className={Styles.imageTileText}>{t("TRANSLATION")}</div>
                            <div className={Styles.imageTileTextFront}>{t("TRANSLATION")}</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        {t("COHERENT_TEXT")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
