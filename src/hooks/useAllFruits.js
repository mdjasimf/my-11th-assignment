import { useEffect, useState } from "react"

const useAllFruits = () => {
    const [allFruits, setallFruits] = useState([]);
    useEffect(() => {
        fetch('https://young-earth-40481.herokuapp.com/allFruits')
            .then(Response => Response.json())
            .then(data => setallFruits(data))
    }, [])

    return [allFruits, setallFruits];
}
export default useAllFruits;