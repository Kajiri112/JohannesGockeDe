import * as React from 'react';

import rwthLogo from "../Assets/Images/Forschung/RWTH_Logo.png"
import hotRollingImg from "../Assets/Images/Forschung/HotRolling1.png"

import Styles from "./Research.module.css";

interface IResearchProps {
}

const Research: React.FunctionComponent<IResearchProps> = (props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles.flexRow}>
                <div>
                    <img className={Styles.logo} src={rwthLogo} alt="RWTH Logo" />
                </div>
                <div className={Styles.summary}>
                    <div className={Styles.title}>
                        Understanding Hot Rolling Processes<br />
                        Using Machine Learning
                    </div>
                    <p className={Styles.downloadLink}><a href={"/Paper/JohannesThesis.pdf"}>Download Thesis - PDF</a></p>
                    <p>
                        Das Paper beschäftigt sich mit den Einsatzmöglichkeiten von Machine Learning in der industriellen Produktion.
                        Zur Erkennung von physikalischen Zusammenhängen und Prozess Optimierung anhand von Big Data.
                        Das ganze basiert auf reellen Daten des Warmwalzen / Hot Rolling.
                    </p>
                    <img className={Styles.contentImage} src={hotRollingImg} alt="hot rolling" />
                </div>
            </div>
        </div>
    );
};

export default Research;
