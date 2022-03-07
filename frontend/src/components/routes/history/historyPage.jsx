import { Development } from './parts/development';
import { Sales } from './parts/sales';
import { CubingScene } from './parts/cubingScene';
import { Sources } from './parts/sources';

export const HistoryPage = () => (
    <>
        <div className="full">
            <h2>Geschichte des Rubik's Cubes</h2>
        </div>
        <Development />
        <Sales />
        <CubingScene />
        <Sources />
    </>
);