export const SecondLayer = () => (
    <>
        <div className="full">
            <h3>Zweite Ebene</h3>
        </div>
        <div className="text-short">
            <p>
                Jetzt vervollständigen wir die zweite Ebene. Hier gibt es nur zwei
                Algorithmen, die aber nur eine Aneinanderreihung der eben
                gelernten sind. Der erste Fall ist, dass Du die Kante nach links
                einfügen willst.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/edge_insert_left.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Dazu drehst Du die obere Seite entgegen dem Uhrzeigersinn (U').
                Als Eselsbrücke kannst Du dir merken, dass die Kante auf die
                entgegengesetzte Seite gedreht wird, wo sie eingesetzt werden
                soll. Das heißt, die Kante wird links eingeführt, also drehst du
                sie nach rechts. Nun führst Du den Algorithmus
                <kbd>R U R' U'</kbd> aus. Dann drehst Du den gesamten Würfel
                entgegen dem Uhrzeigersinn und führst den Algorithmus
                <kbd>L' U' L U</kbd> aus. Nun ist die Kante eingefügt.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/edge_insert_left_inserted.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Der andere Fall ist, dass die Kante nach rechts eingefügt werden
                muss. Dafür führst Du den Algorithmus von eben "umgekehrt" aus. Du
                drehst also die obere Seite im Uhrzeigersinn (U), führst
                <kbd>R U R' U'</kbd> aus, drehst den gesamten Würfel im
                Uhrzeigersinn und führst <kbd>L' U' L U</kbd> aus.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/edge_insert_right.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Es gibt noch einen dritten Fall, und zwar dass eine Kante gedreht
                ist. Dazu führst Du einen der beiden vorherigen Algorithmen aus,
                um eine falsche Kante einzufügen. Damit nimmst Du die gedrehte
                Kante heraus.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/flipped_edge.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Nun kannst Du sie mit den vorherigen Algorithmen wieder einfügen.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/flipped_edge_taken_out.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>Am Ende sollte der Würfel in etwa so aussehen:</p>
        </div>
        <div className="image-1">
            <img src="images/f2l_2.jpg" className="solve-image"/>
        </div>
        <div className="image-2">
            <img src="images/f2l_1.jpg" className="solve-image"/>
        </div>
    </>
);