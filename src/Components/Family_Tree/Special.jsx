import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = () => {

    const newAsset = useContext(AssetContext)

    return (
        <div>
            <h3>Wife</h3>
            <p>Asset: {newAsset}</p>
        </div>
    );
};

export default Special;<h3>Wife</h3>