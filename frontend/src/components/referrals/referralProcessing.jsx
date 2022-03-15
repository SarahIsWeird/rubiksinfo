import { Navigate } from 'react-router';

const defaultRedirectFragment = '/';

const getRedirectUriFragmentOrDefault = (queryParameters) => {
    if (queryParameters.has('referrer'))
        return queryParameters.get('referrer');

    return defaultRedirectFragment;
}

const buildRedirectComponentFromFragment = (redirectUriFragment) =>
    (<Navigate to={ redirectUriFragment } />);

export const buildRedirectComponentFromQueryParameters = (queryParameters) => {
    const redirectUriFragment = getRedirectUriFragmentOrDefault(queryParameters);
    return buildRedirectComponentFromFragment(redirectUriFragment);
}