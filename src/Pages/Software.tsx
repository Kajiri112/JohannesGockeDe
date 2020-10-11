import * as React from 'react';

import carHeadImg from "../Assets/Images/Software/car_round.png";
import carContImg from "../Assets/Images/Software/ErsatzwagenKalender.png";
import boilerHeadImg from "../Assets/Images/Software/Boiler.png";
import boilerContImg from "../Assets/Images/Software/CSharpBoiler.png";
import MMContImg from "../Assets/Images/Software/MagicMirrorFootball.png";

import Styles from "./Software.module.css";

interface ISoftwareProps {
}

const Software: React.FunctionComponent<ISoftwareProps> = (props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.card}>
                <img className={Styles.introImage} src={carHeadImg} alt="header" />
                <div className={Styles.content}>
                    <div className={Styles.title}>Ersatzwagen Kalender</div>
                    <div className={Styles.subTitle}>Kommerziell</div>
                    <div className={Styles.desc}>
                        Ersatzwagen Kalender dient der Verwaltung von Leihwagen mit Echtzeit-Synchronisation zwischen verschiedenen Standorten.
                        Es wurde in 3 Monaten in Zusammenarbeit mit einer Autohauskette entwickelt, welche auch der erste Abnehmer war.
                    </div>
                    <img className={Styles.contentImage} src={carContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>Features:</div>
                        <ul>
                            <li>Echtzeit Synchronisation</li>
                            <li>Speicherung und Verteilung von Kunden- und Fahrzeugdaten</li>
                            <li>Kalenderansicht</li>
                            <li>Admin und User Version</li>
                            <li>Benutzerfreundliche Bedienung</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={Styles.card}>
                <img className={Styles.introImage} src={boilerHeadImg} alt="header" />
                <div className={Styles.content}>
                    <div className={Styles.title}>C# Boiler</div>
                    <div className={Styles.subTitle}>Freeware</div>
                    <div className={Styles.desc}>
                        C# Boiler lässt Nutzer des populären eSports Titel CS:GO ihre letzten Matches herunterladen, und bietet erste rudimentäre Statistiken.
                        Es ermöglicht weiterhin den Upload dieser Matches zu einem Online Analyse Service - ein Vorläufer von Mentor.GG.
                        Des weiteren enthält C# Boiler Funktionalität zur Verbesserung der Spielerfahrung für Spieler.
                    </div>
                    <img className={Styles.contentImage} src={boilerContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>Features:</div>
                        <ul>
                            <li>Matches herunterladen</li>
                            <li>Ansprechende Übersicht letzter Spiele</li>
                            <li>Online Analyse mittels Big Data</li>
                            <li>Wechsel von Vibrance und Audio Settings bei Matchstart</li>
                            <li>Vollautomatisch: Autostart und Programmstart</li>
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
                    <div className={Styles.title}>Magic Mirror - Football Scores</div>
                    <div className={Styles.subTitle}>Open Source</div>
                    <div className={Styles.desc}>
                        Magic Mirror sind Bildschirme hinter einseitig verspiegeltem Glas, ein Blickfang beim Betreten und Verlassen des Hauses,
                        das einem schnell die Infos gibt die man braucht. Für viele sportbegeisterte Menschen gehören Live Fußball Ergebnisse dazu.
                        Dieses Programm arbeitet mit verschiednen Datenabietern in Einklang um dem Nutzer die Ergebnisse seiner Wahl ansprechend zu Präsentieren.
                        Der Quellcode ist öffentlich einsehbar auf
                        <a href="https://github.com/master117/MagicMirror-FootballLeagues">Github</a>.
                    </div>
                    <img className={Styles.contentImage} src={MMContImg} alt="content" />
                    <div className={Styles.list}>
                        <div>Features:</div>
                        <ul>
                            <li>Live Ergebnisse</li>
                            <li>Anpassbares Design</li>
                            <li>Persönliche Auswahl von Ligen und Turnieren</li>
                            <li>Wechsel zwischen Anstehenden Matches und Tabelle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Software;
