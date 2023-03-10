import * as React from 'react';

export default function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const abortController = new AbortController();

        // NOTE: Hardcoding timeout to 2 seconds for testing only
        // Remove in production env.
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error! Unable to fetch resource.');
                    }

                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(error => {
                    if (error.name === "AbortError") {
                        console.log('Fetch aborted');
                    }
                    else {
                        console.error(error);
                        setError(error.message);
                        setIsLoading(false);
                    }
                });
        }, 2000);

        return () => {
            abortController.abort();
            console.log('Cleanup');
        };

    }, [url]);

    return { data, isLoading, error };
}
