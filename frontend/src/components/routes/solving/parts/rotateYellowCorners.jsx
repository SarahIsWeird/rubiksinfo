import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {RightImage} from '../../../article/image';

export const RotateYellowCorners = () => (
    <>
        <WideParagraph>
            <hr/>
            <h3>Drehen der gelben Ecken</h3>
        </WideParagraph>
        <ShortParagraph>
            <p>
                Jetzt sind alle Ecken an der richtigen Stelle, sie müssen nur noch
                richtig gedreht werden. Drehe dafür den Würfel so, dass wieder die
                weiße Seite nach oben zeigt, und eine ungelöste Ecke nach unten
                rechts.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/white_on_top.jpg" />
        </RightImage>
        <ShortParagraph>
            <p>
                Nun führst Du den gleichen Algorithmus wie am Anfang aus,
                <kbd>R U R' U'</kbd>, bis die gelbe Seite nach unten zeigt.
                Wichtig ist, dass hier <kbd>L' U' L U</kbd> nicht funktioniert.
                Wenn die gelbe Seite nach unten zeigt, drehst Du <b>nur</b>
                <kbd>D'</kbd>, nicht den ganzen Würfel, sodass wieder eine
                ungelöste Ecke unten rechts ist. Dies wiederholst du, bis der
                Würfel gelöst ist.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/solved_cube.jpg" />
        </RightImage>
    </>
);