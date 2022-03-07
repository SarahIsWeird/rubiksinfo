export const WhiteCorners = () => (
    <>
        <div className="full">
            <hr/>
            <h3>Weiße Ecken</h3>
        </div>
        <div className="text-short">
            <p>
                Zuerst drehen wir den Würfel, sodass das weiße Kreuz nach unten
                zeigt. Wichtig ist, dass Du von jetzt an nur noch U frei drehen
                darfst, ansonsten machst Du das weiße Kreuz kaputt. Wenn Du einen
                Algorithmus ausführst, gilt das natürlich nicht. Jetzt suchen wir
                uns Ecken mit einer weißen Seite, und drehen es an sein Platz.
                Dann hältst Du den Würfel so, dass diese Ecke rechts-oben ist.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/white_corner_insert_thrice.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Dann führst Du diesen Algorithmus aus, bis die Ecke an ihrem Platz
                ist und die weiße Seite nach unten zeigt: <kbd>R U R’ U’</kbd>. Es
                kann sein, dass Du den Algorithmus mehrmals ausführen musst.
                Wichtig ist hierbei, dass Du den Würfel immer in der gleichen
                Position behältst.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/white_corner_insert_thrice_done.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Falls die weiße Seite wie hier nach links zeigt, gibt es auch
                einen schnelleren Weg. Dazu hältst Du den Würfel so, dass die Ecke
                nach oben links zeigt, und führst den Algorithmus
                <kbd>L' U' L U</kbd> aus. Dies musst Du dann nur einmal machen.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/white_corner_insert_five_times.jpg"
                className="solve-image"
            />
        </div>
        <div className="full">
            <table border="1" align="center">
                <tr>
                    <th>Wohin zeigt die Ecke?</th>
                    <th>Beispielbild</th>
                    <th>Bester Algorithmus</th>
                    <th>Wie oft muss man den ausführen?</th>
                </tr>
                <tr>
                    <td>Rechts</td>
                    <td>
                        <img
                            src="images/white_corner_insert_once.jpg"
                            className="solve-image-short"
                        />
                    </td>
                    <td><kbd>R U R' U'</kbd></td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Oben</td>
                    <td>
                        <img
                            src="images/white_corner_insert_thrice.jpg"
                            className="solve-image-short"
                        />
                    </td>
                    <td>egal</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Links</td>
                    <td>
                        <img
                            src="images/white_corner_insert_five_times.jpg"
                            className="solve-image-short"
                        />
                    </td>
                    <td><kbd>L' U' L U</kbd></td>
                    <td>1</td>
                </tr>
            </table>
            <hr/>
        </div>
    </>
);