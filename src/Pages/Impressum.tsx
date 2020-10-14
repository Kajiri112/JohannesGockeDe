import * as React from 'react';

interface IImpressumProps {
}

const Impressum: React.FunctionComponent<IImpressumProps> = (props) => {
    return (
        <div style={{minHeight: "90vh"}}>
            <div>
                <h2>Impressum</h2>
                <p>
                    Betreiber:<br />
                Johannes Gocke<br />
                Oberforstbacherstr. 438<br />
                52076 Aachen
            </p>
                <p>E-Mail: johannes_gocke(at)hotmail.de</p>
            </div>
            <hr />
            <div>
                <h2>Privacy / DSGVO</h2>
                <p>Wir sammeln keinerlei Daten, wirklich nicht. </p>
                <p>We do not collect any data, at all.</p>
                <hr />
            </div>
        </div>
    );
};

export default Impressum;
