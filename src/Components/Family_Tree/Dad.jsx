import React from 'react';
import Me from './Me';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <Me/>
                <Brother/>
                <Sister/>
            </section>
        </div>
    );
};

export default Dad;