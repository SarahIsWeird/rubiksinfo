import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ArticleTitleContainer, Bar, FavouriteButtonContainer, FlexDiv, SummaryParagraph } from './common';
import { getMostVisited, registerVisit } from '../../requests/mostVisited';
import { useLocation } from 'react-router';
import { WideParagraph } from '../article/paragraph';

import articleInfo from '../../articleInfo.json';

export const MostVisitedDisplay = () => {
    const [mostVisited, setMostVisited] = useState('');
    const [cookies] = useCookies();
    const location = useLocation();

    const updateMostVisited = useCallback(async () => {
        if (!cookies['session']) return null;

        const response = await getMostVisited();
        if (response === null) return null;

        const { 'most-visited': mostVisited } = response;
        setMostVisited(mostVisited);
    }, [cookies]);

    useEffect(updateMostVisited, [location, updateMostVisited]);

    if (!cookies['session']) return null;
    if (!mostVisited) return null;
    if (!articleInfo[mostVisited]) return null;

    return (
        <>
            <WideParagraph>
                <h2>Deine meistbesuchte Seite</h2>
            </WideParagraph>
            <FlexDiv>
                <FavouriteButtonContainer />
                <ArticleTitleContainer>
                    <h3>
                        <a href={ mostVisited }>
                            { articleInfo[mostVisited].title }
                        </a>
                    </h3>
                </ArticleTitleContainer>
                <Bar />
                <SummaryParagraph>
                    { articleInfo[mostVisited].summary }
                </SummaryParagraph>
            </FlexDiv>
        </>
    );
};

export const VisitUpdater = () => {
    const [cookies] = useCookies();
    const location = useLocation();

    const onLocationChanged = useCallback(async () => {
        if (!cookies['session']) return;
        if (!articleInfo[location.pathname]) return;

        await registerVisit(location.pathname);
    }, [cookies, location]);

    useEffect(onLocationChanged, [onLocationChanged]);

    return null;
}