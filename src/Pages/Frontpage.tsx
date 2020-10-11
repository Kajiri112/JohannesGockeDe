import * as React from 'react';

import researchImg from "../Assets/Images/Forschung.png";
import softwareImg from "../Assets/Images/Software.png";

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
                        onClick={() => document.getElementById("Software")?.scrollIntoView({ behavior: "smooth", block:"center", inline: "nearest" })}
                        className="button"
                    >
                        Software von Morgen
                    </div>
                </div>
                <div className={Styles.column}>
                    <img className={Styles.roundImage} src={researchImg} alt="Forschung" />
                    <p className={Styles.roundImageTitle}>Forschung</p>
                    <div
                        onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth", block:"center", inline: "nearest" })}
                        className="button"
                    >
                        Machine Learning zum Erfolg
                    </div>
                </div>
            </div>
            <div id="Software" className={Styles.section + " " + Styles.altBackGround}>
                <div>
                    <div className={Styles.sectionTitle}>15 Jahre Software</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <div onClick={() => window.location.href = "/software"}>
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={softwareImg} alt="Software" />
                            <div className={Styles.imageTileText}>Software</div>
                            <div className={Styles.imageTileTextFront}>Software</div>
                        </div>
                    </div>
                    <p className={Styles.sectionText}>
                        Seit mehr als 15 Jahren entwickle ich Software, privat und im Betrieb.<br />
                            Sowohl Open Source, für den persönlichen Gebrauch, als auch Business Lösungen.
                        </p>
                </div>
            </div>
            <div id="Research" className={Styles.section}>
                <div>
                    <div className={Styles.sectionTitle}>Daten lügen nicht</div>
                    <hr />
                </div>
                <div className={Styles.flexRow}>
                    <div onClick={() => window.location.href = "/research"}>
                        <div className={Styles.imageTile}>
                            <img className={Styles.imageTileImage} src={researchImg} alt="Research" />
                            <div className={Styles.imageTileText}>Forschung</div>
                            <div className={Styles.imageTileTextFront}>Forschung</div>
                        </div>
                    </div>
                    <p className={Styles.sectionText}>
                        Im Laufe meines Informatik Studiums, aber auch außerhalb,
                        habe ich einige Forschungs betrieben und Berichte geschrieben.
                        Hier stelle ich diese vor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
