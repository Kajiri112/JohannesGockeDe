import * as React from 'react';
import { useTranslation } from 'react-i18next';

import rwthLogo from "../Assets/Images/Forschung/RWTH_Logo.png"
import hotRollingImg from "../Assets/Images/Forschung/HotRolling1.png"

import Styles from "./Research.module.css";

interface IResearchProps {
}

const Research: React.FunctionComponent<IResearchProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={Styles.container}>
            <div className={Styles.flexRow}>
                <div>
                    <img className={Styles.logo} src={rwthLogo} alt="RWTH Logo" />
                </div>
                <div className={Styles.summary}>
                    <div className={Styles.title}>
                        {t("HOT")}
                    </div>
                    <p className={Styles.downloadLink}><a href={"/Paper/JohannesThesis.pdf"}>{t("DOWNLOAD_PDF")}</a></p>
                    <p>
                    {t("HOT_TEXT")}
                    </p>
                    <img className={Styles.contentImage} src={hotRollingImg} alt="hot rolling" />
                </div>
            </div>
        </div>
    );
};

export default Research;
