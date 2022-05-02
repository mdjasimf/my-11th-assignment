import { useEffect, useState } from "react"

const useAllFruits = () => {
    const [allFruits, setallFruits] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allFruits')
            .then(Response => Response.json())
            .then(data => setallFruits(data))
    }, [])

    return [allFruits, setallFruits];
}
export default useAllFruits;