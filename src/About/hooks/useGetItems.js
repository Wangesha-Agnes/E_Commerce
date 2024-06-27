import { getItems } from "../utils";
import { useEffect, useState } from "react";

export const useGetItems = ()=>{
    const [items, setItems]= useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchItems = async()=>{
            try{
                setLoading(true)
                const result = await getItems();
                console.log ({result});
                setItems(result);
                setLoading(false)
            }catch(error){
                setError(`Error: ${error.message}`)
                setLoading(false);

            }


        }
        fetchItems();
    }, []);
    return {items,error, loading}
}

