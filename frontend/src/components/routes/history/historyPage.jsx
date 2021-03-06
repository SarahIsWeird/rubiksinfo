import { Development } from './parts/development';
import { Sales } from './parts/sales';
import { CubingScene } from './parts/cubingScene';
import { Sources } from './parts/sources';
import { ArticleFavouriteButton } from '../../favourites/articleFavourites';
import { WideParagraph } from '../../article/paragraph';

export const HistoryPage = () => (
    <>
        <WideParagraph>
            <h2>Geschichte des Rubik's Cubes <ArticleFavouriteButton /></h2>
        </WideParagraph>
        <Development />
        <Sales />
        <CubingScene />
        <Sources />
    </>
);