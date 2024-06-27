import React from "react";
import {useGetItems} from "./hooks/useGetItems";
import UserCard from "../Atoms/UserCard";
import './index.css';



const Items = ()=>{
    const {items, error, loading} = useGetItems();
    console.log({items});
    return (
        <div className="display">
            {loading && <h2>Loading Items.............</h2>}
            {error && <h2>{error}</h2>}
            {items.length > 0 ? items.map((item)=>(
                <UserCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
                
                />

            )): !loading && <h2>No products found</h2>
        }
        </div>
    )
}
export default Items;

