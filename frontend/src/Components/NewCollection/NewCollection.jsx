import React, { useEffect, useState } from "react";
import './NewCollection.css';
import Item from "../Item/Item";

const NewCollection = () => {

    const [new_collection, setNew_collection] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/newcollectiond')
            .then((response) => response.json())
            .then((data) => setNew_collection(data))
    }, [])
    return (
        <div className="new-collection">
            <h1>NEW COLLECTOIN</h1><hr />
            <div className="collection">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_prices={item.new_price} old_prices={item.old_price} />
                })}
            </div>
        </div>
    )
}
export default NewCollection;

