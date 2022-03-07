

const NotationIntroduction = () => (
    <p>
        Damit wir uns über Algorithmen verständigen können, brauchen wir
        eine einheitliche Notation, um aufschreiben zu können, welche Seite
        des Würfels wir drehen. Es gibt viele verschiedene Notationen mit
        unterschiedlichen Vor- und Nachteilen, wir wollen uns allerdings auf
        die offizielle Notation beschränken. Dazu wird jeder Seite des
        Würfels ein Buchstabe zugewiesen. Diese sind:
    </p>
);

const NotationTable = () => (
    <table border="1" align="center">
        <tr>
            <th>Buchstabe</th>
            <th>Englischer Name</th>
            <th>Deutscher Name</th>
        </tr>
        <tr>
            <td><kbd>L</kbd></td>
            <td>Left</td>
            <td>Links</td>
        </tr>
        <tr>
            <td><kbd>R</kbd></td>
            <td>Right</td>
            <td>Rechts</td>
        </tr>
        <tr>
            <td><kbd>U</kbd></td>
            <td>Up</td>
            <td>Oben</td>
        </tr>
        <tr>
            <td><kbd>D</kbd></td>
            <td>Down</td>
            <td>Unten</td>
        </tr>
        <tr>
            <td><kbd>F</kbd></td>
            <td>Front</td>
            <td>Vorne</td>
        </tr>
        <tr>
            <td><kbd>B</kbd></td>
            <td>Back</td>
            <td>Hinten</td>
        </tr>
    </table>
);

const NotationVisualization = () => (
    <p>
        Am besten kannst Du dir das visualisieren, wenn Du deinen Würfel so
        vor dich hältst, dass eine Seite zu dir schaut und eine andere auf
        einer Fläche liegt:
    </p>
);

const NotationTurning = () => (
    <>
        <p>
            Mithilfe dieser Buchstaben kann nun auch Drehung einer Seite
            angegeben werden:
        </p>
        <ul>
            <li>
                Wenn Du einen der Buchstaben siehst, drehst Du die entsprechende
                Seite um 90°, also eine Viertelumdrehung, im Uhrzeigersinn.
                Beispiel: <kbd>F R L</kbd>
            </li>
            <li>
                Wenn ein Apostroph (<kbd>’</kbd>) hinter dem Buchstaben steht,
                drehst Du die entsprechende Seite um 90° <b>entgegen</b> den
                Uhrzeigersinn. Beispiel: <kbd>F’ R’ L’</kbd>
            </li>
            <li>
                Wenn eine <kbd>2</kbd> hinter dem Buchstaben steht, drehst Du die
                Seite 180°, also eine halbe Drehung. Beispiel: <kbd>F2 R2 L2</kbd>
            </li>
        </ul>
        <p>
            Ein Algorithmus sieht dann also zum Beispiel so aus: <kbd>R U R’ U R U2 R’</kbd>
        </p>
    </>
);

export const Notation = () => (
    <div className="full">
        <h3>Notation</h3>
        <NotationIntroduction />
        <NotationTable />
        <NotationVisualization />
        <NotationTurning />
        <hr/>
    </div>
);