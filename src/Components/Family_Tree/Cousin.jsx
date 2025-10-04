import React, { use } from 'react';
import { AssetContext } from './FamilyTree';


const Cousin = ({name}) => {

    const newAsset = use(AssetContext)

    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Razzak' && <p>Asset: {newAsset} </p>
            }
            {
                name === 'Swapna' && <p>Asset: {newAsset} </p>
            }
        </div>
    );
};

export default Cousin;