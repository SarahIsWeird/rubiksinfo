
import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {LeftImage, RightImage} from '../../../article/image';

export const WhiteCross = () => (
    <>
        <WideParagraph>
            <h3>Weißes Kreuz</h3>
            <p>
                Da wir nun wissen, wie Algorithmen beschrieben werden, können wir
                mit dem Lösen anfangen. Für diesen Schritt brauchen wir allerdings
                noch keine Algorithmen, da wir das weiße Kreuz rein intuitiv bauen
                können. Probier es einfach mal aus!
            </p>
        </WideParagraph>
        <ShortParagraph>
            <p>
                Achte unbedingt darauf, dass die Kanten auch an der richtigen
                Seite sind.
            </p>
        </ShortParagraph>
        <LeftImage>
            <img
                src="images/white_cross_incorrect.jpg"
                className="solve-image"
            />
            <span>Falsch</span>
        </LeftImage>
        <RightImage>
            <img src="images/white_cross_correct.jpg" />
            <br/>
            <span>Richtig</span>
        </RightImage>
    </>
);