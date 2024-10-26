import { useEffect } from 'react';

function useDocTitle(value) {
    useEffect(() => {
        document.title = value;
    }, [value]);
}

export default useDocTitle;