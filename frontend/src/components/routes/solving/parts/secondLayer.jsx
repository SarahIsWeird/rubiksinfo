
import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {LeftImage, RightImage} from '../../../article/image';

export const SecondLayer = () => (
    <>
        <WideParagraph>
            <hr />
            <h3>Zweite Ebene</h3>
        </WideParagraph>
        <ShortParagraph>
            <p>
                Jetzt vervollständigen wir die zweite Ebene. Hier gibt es nur zwei
                Algorithmen, die aber nur eine Aneinanderreihung der eben
                gelernten sind. Der erste Fall ist, dass Du die Kante nach links
                einfügen willst.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/edge_insert_left.jpg" />
        </RightImage>
        <ShortParagraph>
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
        </ShortParagraph>
        <RightImage>
            <img src="images/edge_insert_left_inserted.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                Der andere Fall ist, dass die Kante nach rechts eingefügt werden
                muss. Dafür führst Du den Algorithmus von eben "umgekehrt" aus. Du
                drehst also die obere Seite im Uhrzeigersinn (U), führst
                <kbd>R U R' U'</kbd> aus, drehst den gesamten Würfel im
                Uhrzeigersinn und führst <kbd>L' U' L U</kbd> aus.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/edge_insert_right.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                Es gibt noch einen dritten Fall, und zwar dass eine Kante gedreht
                ist. Dazu führst Du einen der beiden vorherigen Algorithmen aus,
                um eine falsche Kante einzufügen. Damit nimmst Du die gedrehte
                Kante heraus.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/flipped_edge.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                Nun kannst Du sie mit den vorherigen Algorithmen wieder einfügen.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/flipped_edge_taken_out.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>Am Ende sollte der Würfel in etwa so aussehen:</p>
        </ShortParagraph>
        <LeftImage>
            <img src="images/f2l_2.jpg" />
        </LeftImage>
        <RightImage>
            <img src="images/f2l_1.jpg" />
        </RightImage>
    </>
);