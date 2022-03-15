import {useLocation} from 'react-router';
import {useMemo} from 'react';

export const useQueryParameters = () => {
    const { search: queryParameters } = useLocation();

    return useMemo(() => new URLSearchParams(queryParameters), [queryParameters]);
}