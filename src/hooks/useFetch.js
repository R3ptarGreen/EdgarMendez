import {useEffect, useState} from 'react'
const useFetch = (URL) => {
    
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(URL);
                const data = await res.json()
                setData(data)
            }catch(err){
                setError(err)
            }finally{
                setLoad(false)
            }
        }
        fetchData()
    }, [URL])
    
    return {data, load, error}
}
export default useFetch