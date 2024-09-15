import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const storecontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    food_list.forEach((item) => {
        cart[item._id] = 0;
    });
    return cart;
}

const StoreContextProvider = (props) => {
    const [cartitem, setcartitem] = useState(getDefaultCart());

    const addTocart = (_id) => {
        setcartitem((prev) => ({ ...prev, [_id]: prev[_id] + 1 }));
    }

    const removeFromCart = (_id) => {
        setcartitem((prev) => ({ ...prev, [_id]: prev[_id] - 1 }));
    }

    const contextValue = {
        food_list,
        cartitem,
        addTocart,
        removeFromCart,
    };

    console.log('Context cartitem:', cartitem);
    console.log('Context food_list:', food_list);

    return (
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    );
};

export default StoreContextProvider;
