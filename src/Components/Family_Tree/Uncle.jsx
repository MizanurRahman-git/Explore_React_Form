import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name={'Razzak'}/>
                <Cousin name={'Rokchana'}/>
                <Cousin name={'Afchana'}/>
            </section>
        </div>
    );
};

export default Uncle;