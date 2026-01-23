import { createContext } from "react";
import {  mens_clothes, offers, prodectCategory,  } from "../assets/assets";
import { categories,products,ProductInfo,productDetails } from "../api";
import { displayimage } from "../assets/assets";

export const WebContext = createContext();

export const WebContextProvider = (props) => {

    const value = {
        displayimage,offers,prodectCategory,ProductInfo,mens_clothes,categories,products,productDetails,
    };

    return (
        <WebContext.Provider value={value}>
            {props.children}
        </WebContext.Provider>
    );
};
