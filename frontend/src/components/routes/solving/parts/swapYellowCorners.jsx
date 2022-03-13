import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {RightImage} from '../../../article/image';

export const SwapYellowCorners = () => (
    <>
        <WideParagraph>
            <hr/>
            <h3>Gelbe Kanten</h3>
        </WideParagraph>
        <WideParagraph>
            <p>
                Höchstwahrscheinlich sind die gelben Kanten nicht bereits an den
                richtigen Stellen. In diesem Fall müssen wir dies beheben. Wenn Du U
                ein paar Male drehst, siehst du, dass zwei Kanten bereits richtig
                liegen. Entweder sind diese nebeneinander, oder sie liegen gegenüber
                von einander.
                <br/><br/>
                1. Die Kanten liegen nebeneinander. Halte den Würfel so, dass die
                richtigen Kanten rechts und hinten liegen. Dann führst du
                <kbd>R U R' U R U2 R' U</kbd> aus. Die Kanten sollten nun alle
                richtig sein.<br/>
                2. Die Kanten liegen gegenüber voneinander. Es ist egal, wie Du den
                Würfel hältst, und Du führst den Algorithmus aus 1 aus. Danach
                kannst Du wieder U drehen, bis zwei Kanten richtig liegen, und
                folgst der Schrittfolge aus 1.
            </p>
        </WideParagraph>
        <WideParagraph>
            <hr/>
            <h3>Verschieben der gelben Ecken</h3>
        </WideParagraph>
        <ShortParagraph>
            <p>
                Nun müssen die gelben Ecken an ihre richtigen Positionen. Dafür
                suchst Du dir eine Ecke, die schon an ihrem richtigen Platz ist,
                und hältst den Würfel so, dass die Ecke oben rechts ist. Dann
                führst Du den Algorithmus <kbd>U R U' L' U R' U' L</kbd> aus. Es
                kann sein, dass Du dies mehrmals tun musst. Falls Du keine Ecke
                findest, die bereits an ihrem richtigen Platz ist, führst Du den
                Algorithmus von einer beliebigen Stelle aus und suchst dir danach
                eine korrekte Ecke.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/yellow_corners_orientation.jpg" />
        </RightImage>
    </>
);