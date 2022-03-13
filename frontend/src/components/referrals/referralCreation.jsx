const nonReferringPaths = ['/', '/login', '/registrierung'];

const pathCanBeReferrer = (urlPath) =>
    !nonReferringPaths.includes(urlPath);

const buildReferrerQuery = (currentUrl) =>
    "?referrer=" + currentUrl;

export const buildConditionalReferrerPath = (destination, currentUrl) => {
    let destinationWithReferrer = destination;

    if (pathCanBeReferrer(currentUrl))
        destinationWithReferrer += buildReferrerQuery(currentUrl);

    return destinationWithReferrer;
};