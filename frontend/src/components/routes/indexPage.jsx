import { WideParagraph } from '../article/paragraph';
import { FavouriteList } from '../favourites/favouriteList';

export const IndexPage = () => (
    <>
        <WideParagraph>
            <h1>Willkommen bei Rubik's Info</h1>
            <p>
                Hier kannst Du dich über die Geschichte des Rubik’s Cube informieren
                und einen Einblick in die verschiedenen Arten des Kulträtsels
                bekommen. Und falls Du deinen Würfel nicht gelöst bekommen solltest, wirf
                doch mal einen Blick auf die Lösungsseite! Bei Problemen oder Anregungen
                schreib uns gerne über das Kontaktformular. Das findest Du auf jeder Seite unten.
            </p>
        </WideParagraph>
        <WideParagraph>
            <FavouriteList />
        </WideParagraph>
    </>
);