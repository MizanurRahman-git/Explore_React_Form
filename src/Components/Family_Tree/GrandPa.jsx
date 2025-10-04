import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const GrandPa = () => {
    return (
        <div>
            <h3>GrandPa</h3>
            <section className='flex'>
            <Dad/>
            <Uncle/>
            <Aunt/>
            </section>
        </div>
    );
};

export default GrandPa;