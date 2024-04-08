import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController()

        setTimeout(() => {
        fetch(url, { signal: abortController.signal }) // asscociate abort controller
            .then(res => {
            if(!res.ok){
                throw Error('Could not fetch data from endpoint') // thrown if 404 not found
            }
            console.log(res) 
            return res.json() 
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError' ){
                    console.log( 'Fetch has been aborted' );
                } else {
                    setIsPending(false)
                    setError(err.message)    
                }
            })
        }, 1000);

        return () => abortController.abort(); 
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;