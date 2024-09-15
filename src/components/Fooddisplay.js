
import React, { useContext } from "react";
import { storecontext } from "../Contextapi/Storecontext";
import Fooditem from "./Fooditem";
import { Link } from "react-router-dom";
import './Fooddisplay.css'; // Assuming you have a CSS file for styling

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(storecontext);

    // Filter items based on the selected category
    const filteredItems = food_list.filter(item => 
        category === "All" || category === item.category
    );

    return (
        <div className='food-display' id='food-display'>
            <h1>{category === "All" ? "All Food Items" : `${category} Dishes`}</h1>
            {filteredItems.length === 0 ? (
                <p>No items found in this category.</p>
            ) : (
                <div className='food-display-list'>
                    {filteredItems.map((item) => (
                        <Fooditem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FoodDisplay;
