import { useEffect, useState } from "react";


const useAllFruits = () => {
    const [allFruits, setAllfruits] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/allFruits';
        fetch(url)
            .then(response => response.json())
            .then(data => setAllfruits(data));
    }, [])
    return [allFruits, setAllfruits];
}
export default useAllFruits;