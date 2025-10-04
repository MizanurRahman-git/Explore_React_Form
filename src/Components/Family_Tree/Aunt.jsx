import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name={'Swapna'}/>
                <Cousin name={'Protik'}/>
                <Cousin name={'Atik'}/>
            </section>
        </div>
    );
};

export default Aunt;