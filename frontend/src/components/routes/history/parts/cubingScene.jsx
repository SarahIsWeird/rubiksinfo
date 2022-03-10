import {ShortParagraph, WideParagraph} from '../../../article/paragraph';
import {RightImage} from '../../../article/image';

export const CubingScene = () => (
    <>
        <WideParagraph>
            <hr/>
            <h3>3. Cubing-Szene</h3>
        </WideParagraph>
        <ShortParagraph>
            <p>
                Heute gibt es eine weltweite Cubing-Szene, repräsentiert und
                organisiert duch die <a href="https://www.worldcubeassociation.org/about">
                    World Cubing Association (WCA)
                </a>. Überall auf der Welt finden regelmäßig Speedcubing-Wettbewerbe
                statt, veranstaltet durch die WCA oder andere Organisationen und
                Vereine. Diese Wettbewerbe verzeichnen auch viele junge Teilnehmer
                und Zuschauner, wie ein Speedcubing-Wettbewerb in Basel Anfang
                2020 zeigt: Bei dem Großteil der Teilnehmer*innen des Wettbewerbs
                handelte es sich um junge Männer und Kinder.
                <br/>
                Speedcubing wurde in den 80er-Jahren bekannt. Es gab Bücher,
                Artikel und sogar TV-Shows über den Rubik's-Cube, gefolgt von
                kleineren regionalen Speedcubing-Wettbewerben. Der erste
                Speedcubing-Wettbewerb fand dann 1982 statt. Den aktuellen
                Weltrekord im Speedcubing mit einem 3x3x3-Würfel hält Yusheng Du,
                der 2018 nur 3,47 Sekunden zur Lösung des Würfels benötigte. Neben
                dem Lösen eines 3x3x3-Cubes gibt es noch viele andere Disziplinen,
                bei denen <a href="arten.html">anderen Arten von Würfeln</a> gelöst werden.
            </p>
        </ShortParagraph>
        <RightImage>
            <img src="images/competition.jpg" className="img"/>
            <p>
                Ein Speedcubing-Wettbewerb.
                <a href="https://mediaserver.responsesource.com/press-release/81308/Max+Park+in+competition.jpg">Quelle</a>
            </p>
        </RightImage>
    </>
);