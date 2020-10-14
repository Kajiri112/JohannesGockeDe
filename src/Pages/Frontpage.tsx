import * as React from 'react';
import { NavLink } from 'react-router-dom';

import researchImg from "../Assets/Images/Forschung.png";
import softwareImg from "../Assets/Images/Software.png";
import designImg from "../Assets/Images/Design.png";
import ueberImg from "../Assets/Images/Uebersetzungen.png";

import Styles from "./Frontpage.module.css";

interface IFrontpageProps {
}

const Frontpage: React.FunctionComponent<IFrontpageProps> = (props) => {
    return (
        <div className={Styles.container}>
            <div className="">
                <div className="">
                    <h2 className={Styles.title}>Software und Design - Maßgeschneidert</h2>
                    <hr />
                    <p>Ich entwickle die Lösungen, die Ihre Probleme effizient bewältigt.</p>
                </div>
            </div>
            <div className={Styles.flexRow + " " + Styles.columnSection}>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={softwareImg} alt="Software" />
                    <p className={Styles.roundImageTitle}>Software</p>
                    <div
                        onClick={() => document.getElementById("Software")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        Software von Morgen
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={researchImg} alt="Forschung" />
                    <p className={Styles.roundImageTitle}>Forschung</p>
                    <div
                        onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        Machine Learning zum Erfolg
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={designImg} alt="Design" />
                    <p className={Styles.roundImageTitle}>Art & Design</p>
                    <div
                        onClick={() => document.getElementById("Design")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        Was gut aussieht
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={ueberImg} alt="Translation" />
                    <p className={Styles.roundImageTitle}>Übersetzungen</p>
                    <div
                        onClick={() => document.getElementById("Translation")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })}
                        className="button"
                    >
                        Für jeden verständlich
                    </div>
                </div>
            </div>
            <div id="Software" className={Styles.section + " " + Styles.altBackGround}>
                <div>
                    <div className={Styles.sectionTitle}>15 Jahre Software</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/software">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={softwareImg} alt="Software" />
                            <div className={Styles.imageTileText}>Software</div>
                            <div className={Styles.imageTileTextFront}>Software</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        Seit mehr als 15 Jahren entwickle ich professionell Software, privat und angestellt.<br />
                            Von Open Source über Shareware und auch jedwede Business Lösungen.
                        </p>
                </div>
            </div>
            <div id="Research" className={Styles.section}>
                <div>
                    <div className={Styles.sectionTitle}>Daten lügen nicht</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/research">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={researchImg} alt="Research" />
                            <div className={Styles.imageTileText}>Forschung</div>
                            <div className={Styles.imageTileTextFront}>Forschung</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        Im Laufe meines Informatik Studiums, aber auch außerhalb,
                        habe ich einige Forschung betrieben und Berichte geschrieben.
                        Hier stelle ich diese vor.
                    </p>
                </div>
            </div>
            <div id="Design" className={Styles.section + " " + Styles.altBackGround}>
                <div>
                    <div className={Styles.sectionTitle}>Von seriös zu verspielt</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={designImg} alt="Design" />
                            <div className={Styles.imageTileText}>Art & Design</div>
                            <div className={Styles.imageTileTextFront}>Art & Design</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        Ich beschäftige mich mit Webdesign, Druckdesign, Textildesign, Photoshop, Videoschnitt.<br />
                        Auch diese Website ist allein von mir designt.
                    </p>
                </div>
            </div>
            <div id="Translation" className={Styles.section}>
                <div>
                    <div className={Styles.sectionTitle}>Für jeden verständlich</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <NavLink to="/">
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={ueberImg} alt="Translation" />
                            <div className={Styles.imageTileText}>Übersetzungen</div>
                            <div className={Styles.imageTileTextFront}>Übersetzungen</div>
                        </div>
                    </NavLink>
                    <p className={Styles.sectionText}>
                        Als Teil von "Awesome Sauce" und allein habe ich hunderte Texte, Bücher, Manga, Doujins und mehr übersetzt, editiert, typesetted, cleaned, redrawt.
                        <br />
                        Für die Gemeinschaft und Auftragsarbeiten!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
