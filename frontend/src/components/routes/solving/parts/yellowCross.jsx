import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {RightImage} from '../../../article/image';

export const YellowCross = () => (
    <>
        <WideParagraph>
            <hr/>
            <h3>Gelbes Kreuz</h3>
            <p>
                Nun wollen wir auf der Oberseite ein gelbes Kreuz bauen. Hier gibt
                es vier Fälle:
            </p>
        </WideParagraph>
        <ShortParagraph>
            <p>
                1. Du hast schon ein gelbes Kreuz oben. In dem Fall bist du
                fertig.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/yellow_cross.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                2. Du hast eine gelbe Linie oben. Halte den Würfel dann so, dass
                sie parallel zu der Vorderseite verläuft:
            </p>
        </ShortParagraph>
        <RightImage>
            <img
                src="images/yellow_line.jpg"
                className="solve-image"
            />
        </RightImage>
        <ShortParagraph>
            <p>
                3. Du hast ein gelbes L. Halte den Würfel dann so, dass das L nach
                links und oben zeigt:
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/yellow_l.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                4. Du hast nur einen Punkt. In dem Fall ist es egal, wie Du den
                Würfel hältst.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/yellow_dot.jpg" />
        </RightImage>
        <WideParagraph>
            <p>
                Wenn Du den Würfel richtig hältst und nicht bereits beim Kreuz bist,
                führst Du nun den Algorithmus <kbd>F R U R' U' F'</kbd> aus. Danach
                landest Du bei einem der anderen Fälle. Dreh den Würfel also wieder
                richtig und führe den Algorithmus weitere Male aus, bis Du beim
                gelben Kreuz angelangt bist.
            </p>
        </WideParagraph>
    </>
);