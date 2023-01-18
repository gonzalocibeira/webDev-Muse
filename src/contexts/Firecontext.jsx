import React, { createContext, useState, useContext } from 'react';
import { db } from "../components/firebase/firestore";
import { collection, getDocs, doc, query, where } from "firebase/firestore";

export const FireContext = createContext();

export default function FireProvider({children}){

    return (
        <FireContext.Provider value={{}}>
            {children}
        </FireContext.Provider>
    )
}