import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './familyTree.css'

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money , setMoney] = useState(0)

    const Asset = 'Gold'

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <p>Total Family Money: {money} </p>
            <MoneyContext value={[money , setMoney]}>
             <AssetContext.Provider value={Asset}>
                <GrandPa/>
             </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;